export const pipelineData = [
    {
      id: 'source',
      name: 'Source',
      status: 'success',
      title: 'Education & Foundation',
      details: {
        items: [
          'Bachelor in Computer Science - University Name (2019-2023)',
          'AWS Certified Solutions Architect',
          'Kubernetes Administrator (CKA)',
          'HashiCorp Terraform Associate'
        ],
        duration: '2.3s',
        lastRun: '2023-06-15'
      }
    },
    {
      id: 'build',
      name: 'Build',
      status: 'success',
      title: 'Professional Experience',
      details: {
        items: [
          'DevOps Engineer @ Tech Company (2023-Present)',
          '→ Built CI/CD pipelines reducing deployment time by 60%',
          '→ Managed AWS infrastructure serving 2M+ users',
          '→ Implemented Infrastructure as Code using Terraform',
          'Junior DevOps @ Startup (2022-2023)',
          '→ Dockerized 15+ microservices',
          '→ Set up monitoring with Prometheus & Grafana'
        ],
        duration: '5.7s',
        lastRun: '2024-11-20'
      }
    },
    {
      id: 'test',
      name: 'Test',
      status: 'success',
      title: 'Skills & Technologies',
      details: {
        items: [
          'Cloud Platforms: AWS, Azure, GCP',
          'Containers: Docker, Kubernetes, Helm',
          'IaC: Terraform, CloudFormation, Ansible',
          'CI/CD: Jenkins, GitHub Actions, GitLab CI, ArgoCD',
          'Monitoring: Prometheus, Grafana, ELK Stack, Datadog',
          'Languages: Python, Bash, Go, YAML',
          'Version Control: Git, GitHub, GitLab'
        ],
        duration: '1.2s',
        lastRun: '2024-11-24'
      }
    },
    {
      id: 'deploy',
      name: 'Deploy',
      status: 'success',
      title: 'Featured Projects',
      details: {
        items: [
          'Multi-Cloud Kubernetes Platform',
          '→ Automated K8s deployment across AWS/GCP with Terraform',
          '→ 99.9% uptime, handles 10k+ requests/second',
          'Auto-Scaling Infrastructure',
          '→ Dynamic scaling based on CPU/memory metrics',
          '→ Cost optimization saving $15k/month',
          'Complete Observability Stack',
          '→ Real-time monitoring with Prometheus/Grafana',
          '→ Custom alerting and incident response automation'
        ],
        duration: '3.4s',
        lastRun: '2024-11-24'
      }
    }
  ];
  
  export const logMessages = [
    { time: 0, msg: '🚀 Initializing pipeline...', stage: 'init' },
    { time: 500, msg: '📦 Pulling source code from repository', stage: 'source' },
    { time: 1000, msg: '✓ Source stage completed successfully', stage: 'source' },
    { time: 1500, msg: '🔨 Building application artifacts', stage: 'build' },
    { time: 2000, msg: '📊 Running dependency analysis', stage: 'build' },
    { time: 2500, msg: '✓ Build stage completed successfully', stage: 'build' },
    { time: 3000, msg: '🧪 Executing test suite', stage: 'test' },
    { time: 3500, msg: '✓ All tests passed (127/127)', stage: 'test' },
    { time: 4000, msg: '🚢 Deploying to production', stage: 'deploy' },
    { time: 4500, msg: '✓ Deployment successful', stage: 'deploy' },
    { time: 5000, msg: '✅ Pipeline completed successfully!', stage: 'complete' }
  ];