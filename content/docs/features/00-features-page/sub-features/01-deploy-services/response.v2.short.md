### **Deploy Services/Apps with Kind-to-Provider API Resources**

Simplify application deployments across various environments using Planton Cloud's kind-to-provider mapped API
resources. Each combination of application type and deployment environment is specifically modeled, providing a
consistent and straightforward deployment experience on platforms like Kubernetes, Fargate, and Cloud Run.

**Visual Aid:**

- **Diagram Idea:** Illustration showing different application types connected to various deployment environments
  through Planton Cloud's API resources.
- **Style:** Clean and simple infographic with icons representing application types (web apps, APIs, functions) and
  deployment platforms, connected via arrows through Planton Cloud.

---

### **Consistent Configuration Management with Kustomize**

Manage deployment configurations efficiently using Kustomize within Git repositories. By organizing configurations
into 'base' and 'overlays', environment-specific settings are applied easily without added complexity. This method
leverages familiar tools, streamlining the deployment workflow and reducing the learning curve.

**Visual Aid:**

- **Image Idea:** A simplified directory tree showing a 'kustomize' folder containing 'base' and 'overlays' subfolders
  for different environments.
- **Style:** Visual representation of folder structure with color-coded folders and files to illustrate how overlays
  modify the base configuration.

---

### **Automated CI/CD Pipelines with Pre-built Workflows**

Accelerate the deployment process with pre-built GitHub Actions and workflows. Integration with the 'planton' CLI allows
for dynamic parameter overrides, ensuring deployments reflect the latest code changes. Deployments trigger stack jobs
that utilize Pulumi workflows for consistent application deployment across all environments.

**Visual Aid:**

- **Flowchart Idea:** A CI/CD pipeline diagram starting from a code commit, triggering GitHub Actions for building and
  deploying applications via 'planton' CLI and Pulumi.
- **Style:** Sequential flowchart with icons representing GitHub, Docker, 'planton' CLI, Pulumi, and deployment
  environments, connected with arrows to illustrate the deployment process.

---

**Note to UX Designer:**

These sections are concise and designed to fit within the style and length of typical features on the GitHub features
page. They are crafted to educate developers about the "Deploy Services/Apps" feature without using grand language or
unnecessary complexity. Each section includes a visual aid suggestion to enhance understanding and engagement.
