import React from 'react';

export const Footer = () => {
  return (
    <div className="mt-8 text-center text-xs text-slate-600 font-mono space-y-1">
      <p>Built with React + Vite + Tailwind CSS</p>
      <p>Deployed via GitHub Actions → AWS S3 + CloudFront</p>
      <p className="text-slate-700">Infrastructure as Code: Terraform | Monitoring: CloudWatch</p>
    </div>
  );
};