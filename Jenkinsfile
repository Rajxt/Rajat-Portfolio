pipeline {
    agent any
    
    environment {
        APP_NAME = "myportfolio"
        DOCKER_TAG = "${BUILD_NUMBER}"
        GIT_REPO = "https://github.com/Rajxt/Rajat-Portfolio.git"
        GIT_BRANCH = "main"
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo '📥 Checking out code from GitHub...'
                git branch: "${GIT_BRANCH}", url: "${GIT_REPO}"
                
                // Show what we checked out
                sh 'ls -la'
                sh 'git log -1'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo '🐳 Building optimized multi-stage Docker image...'
                script {
                    // Build the image
                    sh "docker build -t ${APP_NAME}:${DOCKER_TAG} ."
                    
                    // Tag as latest for easy reference
                    sh "docker tag ${APP_NAME}:${DOCKER_TAG} ${APP_NAME}:latest"
                    
                    // Show image details
                    sh "docker images ${APP_NAME}:${DOCKER_TAG}"
                }
            }
        }
        
        stage('Image Analysis') {
            steps {
                echo '📊 Analyzing Docker image optimization...'
                script {
                    // Get and display image size
                    def imageSize = sh(
                        script: "docker images ${APP_NAME}:${DOCKER_TAG} --format '{{.Size}}'",
                        returnStdout: true
                    ).trim()
                    
                    echo "✅ Final Image Size: ${imageSize}"
                    
                    // Show layer information
                    echo "📋 Image Layers:"
                    sh "docker history ${APP_NAME}:${DOCKER_TAG} --no-trunc"
                    
                    // Count layers
                    def layerCount = sh(
                        script: "docker history ${APP_NAME}:${DOCKER_TAG} --quiet | wc -l",
                        returnStdout: true
                    ).trim()
                    echo "📊 Total Layers: ${layerCount}"
                }
            }
        }
        
        stage('Test Container') {
            steps {
                echo '🧪 Testing container before deployment...'
                script {
                    // Start test container
                    sh """
                        docker run -d \
                            --name ${APP_NAME}-test \
                            -p 8888:80 \
                            ${APP_NAME}:${DOCKER_TAG}
                    """
                    
                    // Wait for container to start
                    sh 'sleep 5'
                    
                    // Test if container is running
                    sh "docker ps | grep ${APP_NAME}-test"
                    
                    // Test HTTP response
                    sh """
                        curl -f http://localhost:8888 || exit 1
                    """
                    
                    echo "✅ Container test passed!"
                    
                    // Clean up test container
                    sh """
                        docker stop ${APP_NAME}-test
                        docker rm ${APP_NAME}-test
                    """
                }
            }
        }
        
        stage('Deploy to Production') {
            steps {
                echo '🚀 Deploying to production...'
                script {
                    // Stop and remove old container
                    sh """
                        docker stop ${APP_NAME} 2>/dev/null || true
                        docker rm ${APP_NAME} 2>/dev/null || true
                    """
                    
                    // Run new production container
                    sh """
                        docker run -d \
                            --name ${APP_NAME} \
                            -p 80:80 \
                            --restart unless-stopped \
                            ${APP_NAME}:${DOCKER_TAG}
                    """
                    
                    // Wait for container to be ready
                    sh 'sleep 5'
                    
                    // Verify deployment
                    sh "docker ps | grep ${APP_NAME}"
                    
                    // Test production endpoint
                    sh "curl -f http://localhost/ || exit 1"
                    
                    echo "✅ Production deployment successful!"
                    echo "🌐 Application is live at: http://YOUR_EC2_IP"
                }
            }
        }
        
        stage('Cleanup Old Images') {
            steps {
                echo '🧹 Cleaning up old Docker images...'
                script {
                    // Keep last 3 builds, remove older ones
                    sh """
                        docker images ${APP_NAME} --format '{{.Tag}}' | \
                        grep -E '^[0-9]+\ | \
                        sort -rn | \
                        tail -n +4 | \
                        xargs -I {} docker rmi ${APP_NAME}:{} 2>/dev/null || true
                    """
                    
                    // Show remaining images
                    sh "docker images ${APP_NAME}"
                    
                    echo "✅ Cleanup complete!"
                }
            }
        }
    }
    
    post {
        success {
            echo ''
            echo '✅ ================================================='
            echo '✅          DEPLOYMENT SUCCESSFUL!               '
            echo '✅ ================================================='
            echo "✅ Build Number: ${BUILD_NUMBER}"
            echo "✅ Image: ${APP_NAME}:${DOCKER_TAG}"
            echo "✅ Container: ${APP_NAME}"
            echo '✅ Status: Running on port 80'
            echo '✅ URL: http://YOUR_EC2_IP'
            echo '✅ ================================================='
            echo ''
        }
        
        failure {
            echo ''
            echo '❌ ================================================='
            echo '❌          DEPLOYMENT FAILED!                   '
            echo '❌ ================================================='
            echo '❌ Build Number: ${BUILD_NUMBER}'
            echo '❌ Check the logs above for error details'
            echo '❌ ================================================='
            echo ''
            
            // Cleanup failed containers
            script {
                sh """
                    docker stop ${APP_NAME}-test 2>/dev/null || true
                    docker rm ${APP_NAME}-test 2>/dev/null || true
                """
            }
        }
        
        always {
            echo '🧹 Performing final cleanup...'
            
            // Clean workspace
            cleanWs()
            
            // Remove dangling images
            sh 'docker image prune -f || true'
            
            echo '✅ Workspace cleaned!'
        }
    }
}