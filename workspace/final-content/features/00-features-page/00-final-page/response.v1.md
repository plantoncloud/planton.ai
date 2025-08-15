## Hero Section

# All-in-One Platform for Cloud-Native Deployments

Simplify, automate, and scale your DevOps workflows with Planton Cloud.

---

## Sub-Feature Sections

### Sub-Feature: Deploy Services

![Illustration showing different application types connected to various deployment environments through Planton Cloud's API resources.](#)

#### Simplify Application Deployments with Kind-to-Provider API Resources

Simplify application deployments across various environments using Planton Cloud's kind-to-provider mapped API
resources. Each combination of application type and deployment environment is specifically modeled, providing a
consistent and straightforward deployment experience on platforms like Kubernetes, Fargate, and Cloud Run.

[Learn more](#)

#### Consistent Configuration Management with Kustomize

Manage deployment configurations efficiently using Kustomize within Git repositories. By organizing configurations
into 'base' and 'overlays', environment-specific settings are applied easily without added complexity. This method
leverages familiar tools, streamlining the deployment workflow and reducing the learning curve.

[Learn more](#)

---

### Sub-Feature: Shared Variables

![An illustration showing multiple microservices accessing a central ConfigMap for shared configurations.](#)

#### Reduce Configuration Duplication with Centralized ConfigMaps

Planton Cloud introduces ConfigMaps—a centralized resource for managing shared environment variables across multiple
services. ConfigMaps store non-sensitive configuration data as key-value pairs, allowing services to reference them
without embedding the actual values in their codebases. During deployment, Planton Cloud replaces these references with
the actual configuration values, ensuring consistency and simplifying the deployment process.

[Learn more](#)

#### Simplify Maintenance and Enhance Scalability

By centralizing configuration data with ConfigMaps, updating configuration values becomes more efficient. A change made
to a ConfigMap automatically applies to all dependent services upon redeployment, without the need to modify individual
codebases. This approach streamlines maintenance tasks and scales effectively as the number of services and team members
grows.

[Learn more](#)

---

### Sub-Feature: Secrets Management

![A flowchart illustrating how Planton Cloud manages and injects secrets into applications during deployment.](#)

#### Effortless Secrets Management with Planton Cloud

Planton Cloud provides a seamless solution for securely managing application secrets. By integrating with cloud provider
secrets managers like AWS Secrets Manager and GCP Secrets Manager, and utilizing the External Secrets operator in
Kubernetes, it ensures that secrets are injected into applications securely at deployment time. The platform's chatops
tool, Planton Aura, allows developers to manage secrets through conversational commands without needing direct access to
cloud consoles.

[Learn more](#)

#### Overcome Challenges of Traditional Secrets Handling

Existing secrets management tools often lack integration with cloud-native deployment pipelines and do not scale
effectively in automated environments. Planton Cloud addresses these challenges by automating secrets management within
your deployment workflows, enhancing security, reducing complexity, and streamlining the deployment process.

[Learn more](#)

---

### Sub-Feature: Deploy Open Source

![A clean interface displaying the deployment component store with various open source software options ready for deployment.](#)

#### Streamlined Deployment of Open Source Software

Planton Cloud introduces first-class support for deploying open source software onto Kubernetes. Utilizing Project
Planterm—a unified and consistent API framework—deployment becomes straightforward and efficient. The deployment
component store allows easy browsing of available open source projects, providing clear input specifications and
centralized documentation.

[Learn more](#)

#### Accelerate Development with Conversational Deployment

Leveraging Plantora, the AI-powered DevOps co-pilot, deploying open source software is transformed into a simple
conversation. By requesting services like "a Redis database," deployments are initiated and completed within minutes.
This seamless experience enhances developer productivity and accelerates innovation.

[Learn more](#)

---

### Sub-Feature: Provision Cloud Infrastructure

![Diagram depicting Planton Cloud connecting to multiple cloud providers, highlighting the customizable Pulumi modules.](#)

#### Consistent Deployment for Applications and Infrastructure

Planton Cloud extends its deployment framework to include cloud resources such as compute instances, storage buckets,
and network services. This unified approach provides a consistent and streamlined experience, reducing cognitive load
and enhancing productivity for developers working in cloud-native environments.

[Learn more](#)

#### Multi-Cloud Flexibility with Customizable Provisioning

Adopting a multi-cloud strategy is often hindered by the lack of in-house expertise across different cloud providers.
Planton Cloud empowers organizations by leveraging default Pulumi modules that abstract the complexities of various
cloud services. Additionally, a Pulumi registry allows DevOps engineers to customize provisioning logic, tailoring
deployments to complex environments and specific organizational needs.

[Learn more](#)

---

### Sub-Feature: Ingress Setup

![A smooth network flow from users to applications, emphasizing the simplicity and efficiency of automated ingress management.](#)

#### Streamlined Ingress Management with Planton Cloud

Planton Cloud automates ingress setup by handling the creation of DNS records and configuring network access for both
in-house applications and open-source software. Built-in Pulumi modules manage ingress logic seamlessly, eliminating the
need for manual configurations. By simply specifying a domain name, services become securely accessible without exposing
developers to underlying networking complexities.

[Learn more](#)

#### Customizable Ingress Solutions with Automated SSL Management

Recognizing that organizations may have unique networking requirements, Planton Cloud provides the flexibility to
customize ingress configurations through Pulumi modules. Additionally, the platform automates SSL certificate
provisioning and renewal using industry-standard tools like Cert Manager and Istio, enhancing security while reducing
operational overhead.

[Learn more](#)

---

### Sub-Feature: Pulumi Module Registry

![Display of the Pulumi Module Registry interface showcasing a searchable list of available modules.](#)

#### Centralized Pulumi Module Management

The Pulumi Module Registry provides a unified platform for storing and accessing Pulumi modules, enabling seamless
integration during deployments. This centralization simplifies the discovery of modules, reduces duplication, and
accelerates deployment processes by having all infrastructure code in one accessible location.

[Learn more](#)

#### Reusable Infrastructure Code for Consistency and Efficiency

Reusing well-tested infrastructure code is essential for maintaining consistency across deployments. The Pulumi Module
Registry promotes this practice by allowing teams to utilize standardized modules for common resources, minimizing
configuration errors and saving time.

[Learn more](#)

---

### Sub-Feature: Granular RBAC

![An illustration showing organized permission structures with Granular RBAC.](#)

#### Simplify Access Control at Scale

Granular RBAC in Planton Cloud streamlines permission management by offering an intuitive system that scales seamlessly
with your organization. As organizations expand, traditional role-based access control systems become cumbersome and
difficult to manage. Planton Cloud simplifies this complexity by allowing precise access control at every level.

[Learn more](#)

#### Fine-Grained Permissions for Enhanced Security

Granular RBAC provides fine-grained permission assignments at the organization, environment, and individual resource
levels. Identities—whether users or API clients—are granted specific roles like Owner, Viewer, or Admin for particular
resources. This approach enhances security and compliance while reducing administrative tasks.

[Learn more](#)

---

### Sub-Feature: Team Administration

![An organizational chart illustrating teams and sub-teams within Planton Cloud.](#)

#### Granular Access Control with Team Hierarchies

Planton Cloud's Team Administration enables the creation of teams and sub-teams, mirroring organizational structures.
Permissions and roles can be assigned at the organization level, environment level, and even down to individual
resources, offering unparalleled granularity in access control.

[Learn more](#)

#### Streamlined Permission Management with Conversational AI

Planton Cloud's AI-powered chat assistant simplifies team administration by enabling permissions management through
natural language conversations. Tasks like inviting new members, assigning roles, and granting access become intuitive,
reducing the learning curve and enhancing productivity.

[Learn more](#)

---

## CTA Section

### Ready to Transform Your DevOps Workflow?

Experience the efficiency and simplicity of Planton Cloud for yourself. Sign up today and accelerate your cloud-native
deployments.

[Get Started Now](#)
