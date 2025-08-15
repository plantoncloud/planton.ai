I am going to give you audio transcriptions from all the video records I have made about the product.

I will also give you an overall goal that I am trying to accomplish here i.e Launch website planton.ai.

This specific request right now is to get a full-page for how PlantonCloud is a solution for those who are looking for an "Internal Developer Platform". I have noticed that all the website I have come across thus far, repurspose the same information to present it in different perspective. IWe are going to do the same thing. You are aessentially goingt o extract the relevant points from the trascripts and provide me with the following.

So, the focus here is only about full feature page for "Internal Developer Platform(as Solution)".

I am also sharing few key aspects to consider as guidelines when generating the content for the feature page.

Most importantly put yourself in the role of a highly skilled developer tooling sales messaging creation expert for this
task.

## overall goal

**Objective:**

We are redesigning our website, transitioning from **planton.cloud** to **planton.ai**, to reflect the current state
of our product, **Planton Cloud**. The new website should showcase all features developed since our initial launch in
December 2023, with a strong emphasis on the AI capabilities integrated into the platform.

**Team Overview:**

- **Product Owner:** *Swarup Donepudi* (myself) — Deep understanding of the product end-to-end.
- **UX Designer:** *Irshad* — Skilled in Figma, designed the first version of Planton Cloud, needs detailed input to
  effectively apply design thinking.
- **Web Developers:** *Satish and Paul* — Experts in React and Next.js, responsible for translating designs into a
  functional website deployed via Vercel.

**Previous Approach and Insights:**

- Initially attempted a creative, ground-up website design but faced challenges due to limited experience.
- Shifted strategy to model our website after a single, developer-focused platform: **GitHub.com**.
    - **GitHub's Structure Insights:**
        - **Header Navigation:** Features "Products" with primary features (e.g., Copilot, Security), "Solutions," and
          other tabs.
        - **Homepage Flow:** After the hero section, each primary feature is highlighted in sequence, linking to
          detailed pages.
        - **Dedicated Feature Pages:** In-depth information about each primary feature.
        - **"All Features" Page:** Lists secondary features that support or enhance the primary ones.

**Current Strategy:**

- Conduct in-depth discussions on each major and minor feature of Planton Cloud.
- Refine these discussions into concise transcriptions.
- Identify Planton Cloud's primary and secondary features, mirroring GitHub's structure.
- Develop section titles, descriptions, and decide on visuals/screenshots for each feature.
- Provide a comprehensive overview of GitHub.com's features for reference.

**Your Role and Request:**

As ChatGPT, we need your assistance to:

1. **Analyze Refined Transcriptions:**
    - Extract and identify the primary and secondary features of Planton Cloud.
    - Understand the value propositions these features offer to developers.

2. **Develop Website Content:**
    - Suggest appropriate section titles for both primary and secondary features.
    - Craft concise and compelling write-ups for each feature, suitable for website content.
    - Recommend visuals or screenshots that effectively illustrate each feature.

3. **Guide Implementation:**
    - Provide insights on structuring the website to enhance user experience.
    - Advise on best practices for communicating complex technical features to a developer audience.

**Outcome Expected:**

- A clear outline of website sections that align with our product's strengths and the interests of our developer
  audience.
- Content that emphasizes our AI integrations and recent developments.
- A cohesive design and content strategy that our UX designer and developers can implement efficiently.

**Additional Context:**

- We will supply you with detailed overviews and comparisons of GitHub.com's features and structure.
- The goal is to create a website that resonates with developers, showcasing depth and utility, much like GitHub.com
  does.

---

Please use this information to understand our requirements and assist us in designing the sections of our new website.

Do not jump to start providing content. We need to first analyze the features and structure before proceeding to
content. So, I will give you all the input that I think is required for you achieve this goal right now incrementally.
Once I share all the input I have then I will ask you to provide me specific content with in the website. So, we are
going to collaborate and build one page after the other and develop the hero section, sections with in the page along
with their titles and description. We will move to another page only after I confirm that I am happy with the current
page.

Here is the list of all pages that we need to build:

Landing Page
Product - Dedicated Individual Pages for Primary Features
Features Page
CLI Page (although not a primary feature, a dedicated page is good) we will add it among the primary features on the
landing page as well.
Solutions - Solutions Overview Page
Solutions - By UseCase - DevOps Page
Solutions - By UseCase - ChatOps Page
Solutions - By UseCase - Internal Developer Platform Page
Solutions - By UseCase - Multi-cloud Page
Solutions - By UseCase - (Add other use cases as applicable)
Solutions - By Size - Startups Page
Solutions - By Size - Small and Medium Teams Page
Solutions - By Size - Enterprises Page
Open Source - Project Planton Page
Open Source -Pulumi Modules Page
Pricing Page

### Transcriptions

auditable-intelligence.transcription.md

Okay, in this next video, I'm going to talk about a concept which we have been referring to as odd, to be intelligence
in whenever we have been talking about how changes made to deployment configurations are captured over time. So I'm
going to quickly go over how that works on client, on cloud. So whenever a developer deploys any deployment component
from the deployment store, usually, the workflow is to select the component and get to a place, get to the deployment
form that provides opportunity to provide all the configuration that is required for that particular deployment
component, there are other ways to achieve the same result, which is to use either CLI and and define the configuration
by in YAML format, like plantain, create AWS RDS cluster will open a text editor, and users have to provide all the
specification attributes in the YAML. If they already have a file written, they can use that using planton Apply and
then specify the location of the file, located on the on the on the works like machine and that resource will be created
with that configuration. So all these different methods produce the same outcome, which is these deployment components
get triggered, and they result in a stack running stack job. So the auditability may not be necessary as soon as the
deployment components are created, like for example, let's take a look at this particular let's take a look at Redis
Database, which has been deployed onto Kubernetes. So here we see that this configuration for this Redis Database, which
has been deployed almost two months ago, it underwent several different modifications, like the configuration has been
modified at several points in time and in order to provide visibility and history of changes we we adopted the approach
that is industry wide and is familiar for all developers, which is the unified git diff format. So developers should be
very familiar with this format, and akin to GitHub or any other source source code repositories, all these changes are
captured as commits, and each commit will also have the author who made the commit and timestamp associated with when
was the commit made, and along With a description to what has been modified as part of the deployment configuration
change. Let's take a look at the most recent versions. It says one of the description for the committee version messages
increasing memory to test credential validation. And when we open that particular commit, we see that the memory has
been increased from, sorry, here in this case, it is CPU increase, which it went, which was increased from two course to
2.1 course. And developers will be able to see a side to side diff, and they'll also be able to see full version of that
specification at that point in time, because planton cloud comes with built in integrated workflows. Sometimes it is
not very obvious as to what might have been the end result of this particular configuration change to the deployment
component as defined in the project plant on API specification. So in order to understand the impact of this change on
the infrastructure, planton Cloud's built in multi cloud deployment framework supported by stack jobs, is tightly
integrated with this versioning, and every change, change to every deployment components, configuration results in a
stack job running stack job, and it is possible to see the Full list of stack jobs that have been previously executed
and the same commit messages will also be surfaced on as the reason for the execution. So for the change that we
previously saw, which is increasing memory to test credential sharing, we can click on that particular stack job, and we
we see that the stack job has been successfully executed. It is essentially indicates that for this particular commit,
the changes have been successfully deployed onto the end infrastructure. And in order to understand what is the actual
result of that change to the configuration, the developers will be able to explore the changes in pulumi diff, which is
displayed alongside the along as Part of the stack job logs and pulumi diff is very popular, so this is probably the
best diff that is that shows the true change that is made to the end infrastructure. So since we want to ensure that we
don't introduce new ways of doing things we want to stick to, things that are that developers are already familiar with.
We leverage the git diff for showing the configuration differences made to the deployment components, and we are
surfacing the diff produced by pulumi, which shows what could have been the impact on the end infrastructure so that
completes like a full full French audit trail for the life cycle of all these resources. And because platinum cloud is
enabled powered by AI, it is also possible for developers to leverage the built in chat ops, a chat ops agent called
plan Tora, and perform the same kind of updates to configuration. Developers will be able to create resource using
guided deployment, like guided creation workflows powered by the AI and post deployment at the developer server can also
come back and make modifications to those configurations, and the the changes made will be displayed right in within the
chat interface, both version diff the git diff format is shown right within the chat interface, along with any
immediately triggered slack job logs will also be shown right in the chat window. And because these these changes happen
within within the chat interface, doesn't mean that the rest of the team is not aware of it all of the regardless of how
change is made, whether it is using CLI or whether it is using graphical user interface, form based modifications, or
whether the changes are originated from chat conversations, Every change is captured in the same format, and unlike
most, most other deployment automation systems, plant on Cloud, provides end to end trail for starting from the
configuration change all the way to infrastructure change, powered by pulumidiv. So we are calling this as auditable
intelligence, trying to highlight the fact that the system is not just intelligent, powered by AI, it's also auditable,
which is, which is probably a very key aspect in the enterprise environments, where visibility is very, very important
for large teams when collaborating on on shared infrastructure. So I'm hoping that chat GPT will find this use
information as useful, and I leave it for chat GPT to decide whether auditable intelligence falls will be considered as
a primary feature, or should it be considered as a secondary feature? Again, I would like to consider chat GPT as more
as more experienced, carries more expertise than I do in terms of creating a compelling sales messaging on on the sales
websites for B to B SAS products. So I'm just trying to provide as much context as possible for it to make the right
choices. So while I think auditable intelligence is a main feature, but I'll see what chat GPT has to say. 

canvas.transcription.md

Alright, so let's in this video, this is another video in the series of the video recordings, more particularly the
console app tour, which is aimed at providing covering as much information as possible, so that we are going to use the
transcription from this video as an input for chat GPT to give us or include as much relevant information as possible,
not not as much quantity the information should be presented in a more concise process, you know, more verbose so much
information on the website, it might overwhelm people. So it should actually be very concise. It should not be as as an
operator. And anyway, in this particular video, I'm going to simply talk about a nice user experience element that we
have developed, and this will probably fall under the under the Service Catalog expectation from an internal developer
platform. So an internal developer platform is expected to provide visibility into various components of a software
within an organization. And as part of exploring providing that visibility, there are two particular features. One is
service hub, which is which kind of is a place where developers can explore the services. When I say services, we're
talking about in house built services, and services will eventually be deployed to environments, right? And those
environments can be Kubernetes environments, or Kubernetes or AWS ECS fargate. It doesn't matter, but these services,
which are written code which gets packaged as darker images, and published artifact will be deployed as running
containers. So the service of access central place for each service, but each service gets deployed to multiple
environments and not along with these info built services a lot of other third parties, software like redistrict
databases or post space. They can be deployed on these YouTube instances or Kubernetes, etc. And there will also be
managed services like RDS instances or storage buckets or DNS loans or sometimes directly on cloud providers, where can
be concrete Kafka clusters on Compute Cloud or database, etc. So requirements can happen to various places in various
environments. And we have this feature on plant on Cloud Console, which we call it as deployments Explorer. So it's a
figma like Canvas, where developers will be able to visualize all the environments within the organization. Environment
is a logical grouping of these deployments and each deployment, so depending on the context, but the developer is
looking at this context, it can be either organizational context or an environment context. When the developer wants you
within a particular environment context, the canvas, like explorer, will show the user or the developer all various
kinds of components so these so each component is represented as a card on this canvas, and all these cards are grouped
by their deployment component. So there are multiple micro services being deployed onto Kubernetes within this
environment, though, all those will be grouped as one grouping, and we that group can be moved around using the mouse
control, mouse pointer and and. So these cards and group of cards can be rearranged depending on how the developer wants
to visualize them. So this vision representation is is a much better offer, so much better view into an environment, as
compared to a straightforward list, because, again, an image is more visually informative than just a plain old list,
right? So I'll rely on chat VP to explain or use vocabulary that can provide the value of this canvas, like explorer
versus a list view, and the developer will also be able to click on these, each of any of these cards, and the details
pane we open up, and that Details pane will show all of the various configuration and only resources that are created as
part of decline this and the developers will be able to live edit the configuration, either if they want to do YAML edit
that is also available on console. If the deployment happens on the Kubernetes they'll be able to explore Kubernetes
resources. So the details pane, which is which shows up when the developer clicks on a card on the canvas, we allow the
developer to access everything about that particular deployed component and also do operations like Team administration
or granular access control or make a modification in case of micro services, but they can download a dot env file, or
they can see his way of changes via version history, and they can also see history of stack jobs, etc. So that covers
the benefits of Canvas. This is not going to be a free page, by itself, but I will rely on chatgpts expertise to bring
together, like combining this information and embedded in appropriate locations on the website. 

connections.transcription.md

Okay, in this video, we are going to cover what we call this as integrations on plant and Cloud Console. So integration,
slash connections, allow the users of plant on Cloud to bring the tools that their tools or service providers, that
there are various has already been using and allow the plant on Cloud to work with those providers. These connections
are primary. The primary like purpose of using these connections is it enables multi cloud deployments. And these
connections, when configured, will also allow plant on Cloud to offer some day to operations, which we'll talk about in
a bit, and connecting GitHub and GitLab accounts will allow bootstrapping new projects, configuring clcd delivered from
the DevOps Co-Pilot, or the pink interface or tifops interface, and these connections will also help the organizations to
configure their own COVID feedback organization can can bring their chat GPT accounts so that all the A integrations, if
any interactions that are that require LLM assisting, organizations can configure their own chat GPT or Open a Platform
account to ensure that all the conversations, or all the data being exchanged with language learning into their own,
their own dedicated chat GPT account, as mentioned in other videos when talking about stack job, stack jobs and The
possibility of creating custom stack developments, these integrations are under the integration slash connections.
Swarup, it is possible for the organizations to configure as many webinars as deployed. The mid credential will help us
to push code changes to code repositories in the form of adding the cncd configurations or deployment configurations,
etc, or these bit credential configurations will also be used for cloning the pulumi modules that are present to your
organization during your stack jobs execution the Docker ministry integration will allow the organization to configure
the Docker registries from which to which the Docker images should be pushed after for the code build happens so while
the code build automation does not run natively on plant on Cloud. There are GitHub actions and GitHub workflows that
have been recreated which can work very well with the Docker release the connections established on plant on cloud and
these Docker release fees will also be used to configure the Docker image pre credential on to the middle and
configuring the deployments of maintenance. These Docker registry credentials will be configured with stack job
configurations, which, as for the multi cloud deployments, the cloud providers currently supported RMS or Root Services
given cloud platform, Microsoft, Azure, although Kubernetes cluster is not a cloud provider, which is the platform that
can provide runtime for the workflows. And snowflake account allows you to deploy snowflake database account, your
snowflake account complement cloud allows you to deploy fully managed Kafka deployments onto your complement Cloud
account, etc, MongoDB Atlas account, if you have it and if you want to connect it and and if you want to deploy
databases on MongoDB Atlas plant on Cloud has deployment components for that, and they re leverage the credential that
you configure. So overall, the primary purpose of these integrations, or connections is to allow you to set things up
for multi cloud declines and for in case of source code integrations, GitHub and GitLab connections, along with big
connections, will help push code and also do more deeper integrations with source code management systems. And Docker
registry is a powerful integration that allows you to configure where Docker images get pushed and also will be pulled
deployed on Kubernetes or other places where Docker images are required. And chat GPT integration will allow you to
bring your own chat GPT back end connection will help you to bring your own history. And back end stack job runners will
help you to deploy stack jobs. And one other aspect of these connections will also be like, if we want to do deeper day
to Operations Integrations, like, for example, if you want to explore Kubernetes resources deployed specifically for a
deployment company, then the same condition that is used for deploying the resources will also be leveraged to provide
more deeper integrations, which are which can be categorized as Day two operations, and that applies for all the
credentials that are also used for multi cloud deployments, they will be repurposed and leverage for allowing day two
operations. So day two operations, you can think of it like maybe you want to take one off ad hoc backup of DS database.
So that's a possible integration that will eventually add for rds, right for now we your data operations are available
for Kubernetes workloads, but that pattern is going to be soon, going to be used by us. So that covers a lot of detail
about the connections and integrations on plant on cloud. And we hope chatgpt is going to leverage all of this
information to probably help us understand where this should where this information should be put under, and any titles
and subsections, etc, So I'm hoping all of these information is going to be. 

dep-store-n-pulmod-registry.transcription.md

So in this video, we'll talk about what is called a deployment component store on console. So welcome there plan on
Cloud Console, and I'm looking at the deployment component score. So I believe that deployment component store is kind
of part of part of multi cloud deployments offering within the internal development platform. So when it comes to an
internal development platform, it should help developers bootstrap new services, deploy those services, and integrate
those services with third party, open source software, or manage services offered on cloud providers, and eventually
deploy All of this infrastructure using the infrastructure available on the cloud providers. When I say infrastructure,
I mean network storage, systems, monitoring, etc. And the main purpose of making this video is to provide as much
information as possible to chatgpt to help us do more detailed content that can be repurposed and utilized on our sales
website. So what is deployment? Component store on Plan downfall away is we have talked about the one of the open source
projects that kind of makes the possibility of multi cloud deployments, which is called Project Plan on. So project plan
on is an open source multi cloud deployment framework, and it is available on GitHub. And the way it works is that three
different categories of components that I just mentioned, which is the in house services developed by the developers,
combined with combined with third party open source software infrastructure like Postgres databases or Redis Database,
which needs to be deployed somewhere, and cloud managed services like AWS RDS databases. And finally, the cutlery path
of the restarting which is the networks and compute and storage infrastructure required to deploy all of this software
and eventually provide the network funding to allow the end users access the software, right so all of these various
categories of components that needs to be eventually deployed both the services the third party software, managed
services, and the underlying infrastructure itself. All of those have been divided into what we call them as deployment
companies, so we kind of put together a nice definition of configuration for each of the popular deployment components.
For example, if you want to deploy a microservice on Kubernetes, there is a deployment component called microservice
Kubernetes. If you want to deploy an open source product, like Postgres database on Kubernetes, we have Postgres
Kubernetes, similarly, we have MongoDB Kubernetes, we have new 4k Kubernetes, we have Redis Kubernetes, we have solar
Kubernetes, we have grafana Kubernetes, we have nuclear Kubernetes, so we have Kafka Kubernetes, gentle Kubernetes, all
of these are open source products that can be deployed to Kubernetes, but when deploying onto Coronavirus, anyone who
wants to deploy it should provide configuration that is required to deploy that particular software on Kubernetes. So we
model that, and we put this concept written in protobufs, right? So this is not limited. So we just covered the in house
services and open source projects both being deployed to COVID. However, the same services can also be deployed onto
what is called AWS fargate or AWS lambda. AWS lambda is for deploying functions as service. AWS fargate is for deploying
a Docker image of a running, running service or running container from AWS target. So yeah, this is a different way to
look at it, right? So depending on what is that you're taking and where you're deploying, you need to you as an employer
wants to deploy that combination, they need to provide a configuration to make that happen. So based on our class
experiencing deploying all of these various workloads on various cloud providers, we kind of model the most popularly
used combinations, and we are calling them as protobuf specifications for those configurations. And these will include
all the attributes, their validations, etc. Now, after modeling these kind of deployment components, we develop the
pulumi module corresponding to each so every deployment component in this project will have a corresponding pulumi
module. So for example, if we go to if we choose deploying Postgres one Kubernetes, we have under Project Plan term, we
have Postgres, Kubernetes, polymer module, so the first part will be the name of the deployment. Content, hyphen,
formula, module, repo. Repository contains a Columbia module within Golang. So this then, how can anyone leverage these
two available. This work is where the CLI built. We can call it plan on, which can be installed using brew. So
basically, when somebody wants to deploy first person Kubernetes or AWS VPC or lambda service or some cloud run
solution, they simply run something like project plans on pulumi up and then provide a stack, and then the manifest
takes the yami that provides the configuration for that particular deployment component, and the CLI is the associates
of the pulumi module for that particular deployment by the declining component is also rejected from the manifest. And
also these total specifications written are all based on Google. It is resource model, so there is API, version, kind,
etc, aspect and status for all of this. So this kind of place, the foundation for managing multi cloud deployments and
deployment store on platinum cloud is essentially a much more innovative experience for the developers who kind of
understand the value of a consistent multi cloud deployment experience of Android projects plant on the same we have
integrated that into plant on cloud by providing a graphical Explorer for all the components available, like in Project
Plan town. In order for anyone to explore what deployment companies are available, they'll have to currently rely upon
exploring the protocol positions or the documentation website of project planform, whereas when using planton cloud,
the deployment component store offers the ability to graphically explore search and look up and Also look at the details
of these various deployment components. So for example, somebody wants to deploy Redis on Kubernetes. Right rediscline
Kubernetes is the deployment component, and we click on that. There are links for the GitHub, which brings us back to
the project plan on Redis Kubernetes specification, right? And then we also see an associated pulimi module. We now do
another video on maybe we'll continue or include the same information in this video. B, so essentially I told you,
right? Like every deployment component has a corresponding preliminary module, right? So if we look for pulumi Hyper
module under Project Plan term organization, we will see that all of these have the module. So we deployment component
has a corresponding preliminary so the pulumi registry on Python cloud, so deployment store and pulumi Register. Pulumi
registry offers a graphical Explorer for the pulumi modules for those deployment companies. So there is actually more to
the pulumi registry, which is organizations will be able to develop their own customizations to these deployment
component modules and register them in the preliminary registry of their organization. So by default, the preliminary
registry of an organization only contains the plant on Cloud maintained which is all the default community modules from
the project. However, it is possible to add the module to the industry by providing some information, like, what's the
deployment component and what's the GitHub? Where is the location of that pulumi module, etc, and give it a unique name,
etc, etc, and, and this one, since it's done, it will now be possible for you to explore all the all the deployment
pumping that your company registers. Okay, so, yeah, and now if you and the pulumi modules that are maintained by plant
downflow have this badge for PV, so that indicates that, and also clicking on source code will take you to the source
code of that module, module on GitHub, and taking on the preliminary module itself will show you more details about the
module, like it will pull up the review from the GitHub repository, and it will get you the examples from the GitHub
repository. The API spec is from the protocol stack input and stack input and stack output. So a lot of information
available and and it also has a breakdown to the schema BSP, which is a documentation Explorer for the APIs. So one can
get to the spec, protocol API specification via graph which can be explored on a graph behavior interface on both and if
you, if the developer wants to deploy a component using this module, they can click Deploy button and select an
environment in which they want to deploy to and they can provide all the attributes. And developer Swarup will also have
an option to fill the form using AI that is going to be powered by plant on AI agent very soon. But when creating the
website, maybe chatgpt can either choose to call it as coming soon, or it can call it as it's already there. We are
highly committed to adding freebie case to further simplify the process of deploying resources when filling out these
kind of complex forms. So that's like, and on the right side of the deploy, you will see the various providers providing
the platforms to deploy these components, and developers will be able to filter based on the providers. So as I
mentioned, already mentioned, it is totally possible for organizations to customize the pollution modules to their
organization best practices, some batteries and config of those as the default polyamine modules for the deployment
components and and the developers will be able to within the organization and they deploy some component. those premium
modules will be materialized. 

kubernetes-day-2-ops.transcript.md

All right, so today we are going to cover another concept called Kubernetes. It's not a concept. It's an important
feature that we offer to the end users in the form of So, okay, internal developer platforms are meant to help
developers do their job more easily with respect to operations. Right now, the development part is still something that
developers will figure it out, but the whole point of creating internal developer platforms is to address the shift
problem where the developers are being tasked to take care of the operations as well. Now first, maybe I can give you a
high level overview of what I mean by operations. So when a developer writes code, he is kind of testing that
application on his local machine, and then usual development life cycles, the code gets pushed and maybe a pull request
is created. And if, if the maturity level of the DevOps automation is relatively high, then there might be a way
developers will be able to test their changes via preview environments, meaning a new deployment that contains the
changes that are included in the pull request. They can be verified on a different version of the app, called preview
version of the app. And if everything looks good, then the preview environment can be much to the main branch, and
eventually it gets deployed to maybe dev So assuming, for the purpose of this discussion, we will only consider that the
organization that is using planton cloud is deploying all of their workloads onto any Kubernetes cluster. It doesn't
matter if it is a GTA cluster, if it is AWS cluster, or even on premise Kubernetes cluster, any Kubernetes cluster needs
to be connected to their organization, where connections and Kubernetes cluster Okay, And once the so again, they
provide some authentication information related to Kubernetes cluster. So one of some a little bit more background on
why we decided to add Kubernetes day to Operations Integrations is, well, maybe I didn't finish explaining the like the
definition of operations. So when the app is running in dev environment, it is no longer running in the developers
laptop. So maybe the app starts behaving in one way in the on their laptop, and when they deploy and when the service is
now integrated with other services within dev environment, there may be a chance that now the app starts behaving
different. Maybe the app starts throwing more errors, etc, so developer can will be able to check the logs of the
backend service right within the integrate ID or terminal if the service is running on their laptops, but the service is
running on a remote Kubernetes cluster inside a Docker container on a Kubernetes worker node, developer needs access to
understand, access to at least logs, to understand what is going on, so that he can probably go and in many cases, if
the service is deployed to Kubernetes, there may also be need for verifying whether the ports are configured properly or
not, whether, whether the problem is with resource allocation or environment variables with with an environment
variables is another important area that is more in a lot of cases, the environment variables will not contain the right
values when the service get to deploy to dev, whereas the environment variables that are used with the service have a
different set of values while running on local machines. So developer would like to verify by being able to run a few
shell commands. So these are the common requirements, like being able to verify the logs and being able to check, check
whether all the configuration values have have the right values, etc, and maybe if it is, when it comes to Kubernetes,
again, the port mappings and resource allocation and etc, etc, may also need to be verified sometimes. So okay, what
would the world look like without the help of plant on Cloud as an internal developer platform? How would things go like
in all of my companies where I worked? It is one of the popular so i. Really developers would be asked to check the logs
on a centralized logging server. So when the services gets deployed to Kubernetes, maybe the Kubernetes cluster is
configured to stream the logs onto a centralized logging system that is the ideal place to check them out. But sometimes
developers are more find it a lot more easier to simply set the logs of a running pod, because these are more real time,
whereas logs to a centralized logging system may take a few seconds after they're produced. So if they are doing some
testing in real time, then the error happens now, and they have to wait for at least five to 10 seconds for their own
message to appear on the centralized log system, etc. So Kubernetes pod logs, where that is access to a kubectl like,
for example, right now I have kubectl sorry, Kubernetes cluster that I'm connected to a kubectl so I can do kubectl logs
Hyson, and then give the name of a card inside this namespace, and I'll be able to see the logs rights here. So this is
because now I have access to configure to coup city from my laptop. I'm able to do it. I'm able to do all sorts of
things like coupe city, electricity logs or coupe CTL, you know, get hyphen and meaning. Show me all the resources that
have been deployed for my micro service, fake d2, ops, etc. Get said, I think all is a command. So yeah, it is showing
me various resources within this particular namespace. So again, the important part is me. I have access to the
Kubernetes cluster, but in the company that wherever I worked in the past, this is a big problem, being able to allow
the users to be able to run operations against Kubernetes API server requires fine grained authorization, etc, which is
difficult to set up. There are apps like teleport, which makes this whole thing process possible like so if you see the
title, it is more secure infrastructure access. So this is probably the right application, right tool that needs to be
deployed within the enterprise company, and which is configured to Iam companies, SSO, so it acts as a good Iam layer
between your Kubernetes cluster and you also IT issues identities, etc, etc. So, but these are complicated and kind of
you need to pay for these solutions. So as an intern like a medium ground solution, plant and Cloud has built
capabilities to provide the developers be able to do these things just the basic data operations. It's not a full
fledged log. There is no centralized logging server within plan term, etc, just like real time, whatever you would do
with kubectl is what you can do with plant on cloud. So let me maybe show you what I'm talking about. So for example,
I'll do plan Tom, get MSK. So I have a few. Oh, wait, yeah, so I have a few. Yeah, I have a few micro services running
on my COVID disk cluster, and those are deployed via using planton cloud. So I want to see what are all the resources that
have been deployed. Say, for example, this micro service called audit. Okay, so you can do plan town, get sorry, plan
town, coupe city. Get all hyphen r, so I'm giving that. Oops. Okay, so this is from you, because it doesn't have I can
use, I just declined say code to build. So all usually takes time. We can get more specific with what we want, so that
it's far more easy. But let's see if it is, if it even Yeah. So yeah, this one meaning whatever I so the way it works is
maybe this might be confusing. It you may assume that. Uh, this command is actually using the kubectl configuration that
I have on my local machine. But the in reality, this is actually working via plant on cloud. So again, I'm using plant
on and also notice that I am not using I'm using the ID of a resource within plant on cloud. So then I'm not passing the
namespace using any so for example, also let's do deployment. It only shows a specific deployment. It has one
deployment, so that is what it is going to show. And I can also do coupe CTL, sorry, plant on coupe CTL, xx, iPhone off.
And then I think it has, yeah, iPhone R this and and then I need to give it a pod ID, and then micro service we want to
we are going to improvise this with the help of like user into interface prompts from kubectl. Again, this is all can be
done using console app as well. I'm showing I'm showing how plant on Cloud acts as a Iam wrapper on top of kubectl,
meaning, as a developer, you don't need to worry about setting up kubeconfig or anything like that. You can simply do
plant on auth login, so all the requests to Kubernetes are being proxied by plant on cloud from your laptop. And if this
will only work, if you, the developer at your organization, has update operation on this particular ID, on this
particular resource. Otherwise, planton will simply say you are not authorized to perform this operation on Kubernetes
resource because you don't have update privileges on this okay? Okay, so I accept into this part I can, I can now run
any type of command from here in a question here on plan to to restrict the access. Is it at the workspace level or at
the pod level. So we manage restriction at plant on clouds, APA, resource level. So what I mean by that is maybe this
can better be understood. If we do all of this from the user interface like the console app, we can do the same exact
thing. So we can go to code to build, right? And there is this Kubernetes resources, right? So, meaning, this is
equivalent to running kubectl get all, like plant on kubectl get all and provide this resource ID on flow, right? Okay,
so clicking on is now I'm getting all all resources. It is much better because it is progressively displaying as it
finds more resources. So me, who is Swarup dhanapudi, I mean logged in as Swarup has permissions, has update privileges
on this particular APA resource, or this resource on plant on cloud, and only then this API call to get resources, get
all the resources that have been deployed on the Kubernetes cluster for this purpose are being retrieved. So again, we
are, we are leveraging the permission management model on plant on Cloud to authorize the user whether he should, he
can, he'll be he's authorized to do this or not. So this is essentially resources. There will be one namespace, not
workspace, one namespace in Kubernetes created for deployment, and we are essentially getting all the resources within
that namespace. So like I can explore what is the deployment definition for this deployment, deployed on Kubernetes. So
this is not client on Cloud API resource. This is Kubernetes API resource. So this is equivalent to like running kubectl
get deployment in the namespace of as I mentioned, the namespace and. The id patches. So this is the deployment on
Kubernetes I can do. But this one is directly the API call is being sent from my computer to the Kubernetes cluster
itself. And the authentication is, I Am I do have the credentials for the Kubernetes cluster saved on my laptop. That is
why it is working. Now, me say, for example, I'm part of a dev team. I just deployed some micro service onto Kubernetes.
Now, how can I view the same exact deployment? Is you can exactly do the same command with this thing. I think here you
have to specify the resource IDs, not what. Oh, yeah, no, that didn't work for deploy and work for everything else.
Let's see service. Me. Yeah, so this is equivalent to same exact thing. I can run get service. And this the name of the
service is made, but here it should be so you see the same exact output this one, which is via plant on cloud. So
whenever I'm prefixing the coach GTL command with plant on that means the request is actually going to plant on Cloud.
APIs plant on clouds first verifies whether the request, whoever ran, sent this API call to plant on Cloud. Do they have
update privileges to this resource ID? If so, plan on cloud will get the connection information from the database and
construct a request to the Kubernetes cluster, get the information and send it back to the user and plant on CLA is
displaying that information, so there is this plant on Cloud proxy between the user and Kubernetes. So it's like the
steps have been introduced from user deployed a micro service. She doesn't have to talk to admins to get access to the
Kubernetes cluster or anything. He can run plant on kubectl. A few comments, not all of them, as I said, we are not
replacing every single tool built for Kubernetes operations. In majority of cases, developers want to do like 80% of 20%
of operations on Kubernetes to solve their 80% of problems. So we only modeled and built those 20% capability most
popular 20% capabilities within Kubernetes, into plant on cloud, so that developers get that experience out of the box.
Okay? So that is one thing, and I also showed you that it is possible to exit into the container via this thing, right?
So that developers will be able to run random commands within the Docker container running on a remote Kubernetes worker
node. Same exact thing is also possible with kubectl, but in this case, we are leveraging the developer who is able to
leverage his plant on Cloud credentials. He does print on auth login before he runs this command. And it is also
possible to edit the API resource. So as you can see, if I as soon as I clicked on the resource, it shows me the ML and
cancel and save buttons, and I'll be able to make more changes. If I want to say, for example, I'll add another port
because it's missing. Say, REST API port, right? Test, and this is 81 and target portal it is. I'm just making a random
so first, maybe I'll do plan. Sorry, I'll do a kubectl get service, and this one is code to build main Okay, so this is
the service definition first, right now, you only see two ports. I'm directly sending a request to Kubernetes, and I
added another resource here. Now the save button is enabled. Okay. I see starting issue there, right on cover, it is
completely white. This is for the transcript. There is a bug on Kubernetes, sorry. Kubernetes object edit page where on
hover the safe Save button is get. Trans transform into completely white. That needs to be fixed by Satish. We need to
create a GitHub issue on console web app repository. So I click on save, and the object gets saved, and you can verify
whether the Modified Object is actually modified on Kubernetes. So I closed and I reopen that and I see that the code
that we added is here, and we can send a request directly to CTL soup, TTL, get service main, and you will see the part.
So basically, it's like you're able to, again, those 20% of capabilities. We want to list the Kubernetes resources
deployed for my workload. You want to be able to edit them live. If you are doing some type of debugging within you
should be able to Exec. You should also be able to view logs of a pod. That is another requirement. And by the way, you
can also exec into a pod right from the browser as well. So it first shows the list of containers running for this pod,
and you should need to select a container, and you should type a shell, and you will be able to see the same exact
things here. You'll be able to list files, etc, etc, okay, and you can finally type close so the and then there is also
you have the ability to delete these resources as well, etc, etc, and I will be able to stream logs right now I either I
think the logs are not being produced for this part, or there is some issue with the logging integration, but ideally,
yeah, you'll be able to filter logs, some filters available. And I also already created a ticket to fix the stylings
this, this, all of this is compact, whereas this is from old design, so I created an issue for that. But yeah, overall,
developer would have been able to ideally see the log streaming. So if you keep this pod open, and if the back end AP
integration is working fine, then the developer should have will be able to see the pods live in life. Okay, so I think,
and the same thing is also possible here, also, just like plant on coupe city electric, there is plant on coupe CTL
logs, and it should give you the logs from all pods directly if you specify the resource ID that is also possible, you
can simply say, Hey, planton, get me the logs of all the parts that have been deployed for my micro service. By
specifying the ID of the micro service that you deployed using planton, if you specify the ID of that then planton will
start a log stream with all your all the parts. Sometimes there will be more than one part. So, yeah, you can stream the
log from all but so that kind of concludes all all the features around the Kubernetes data operations that we have built
in Go, using both CLI and using the console app. Any questions later? No, cool. I am stopping the recording and sharing.

plantora.transcription.md

All right, so in this video, which is aimed at providing chatgpt as much using the information as possible about one
particular function on plant on Cloud to help chatgpt Give us a very detailed page that can that is dedicated for one of
the primary features on plant on Cloud, which is plantora that develops a and agent. So in this video, I'm going to
cover what is possible today and what is more possible in the future, etc, right now. Yeah, I'm gonna talk about as many
things as possible. So this plant or a agent is built using, using powered by large language models and sophisticated
multi-agent workflows, agentic workflow system that leverages the combination of triggering the self-service
operations in natural language. So for example, typically without a chat ops experience like plant or developers will
have to learn about there, have to dig through lots of documentation or watch videos on how to do this, and my
co-founder helps me, it puts has a different perspective on one of the biggest benefits of plant or which is any every
application has a different kind of interface. The buttons are located at certain places, there will always be a
sequence of steps that one has to learn, which is select the right menu, right sidebar items and go through the same
sequence of steps. So it is an education, whereas when you enable developers to do the same things in conversational
interface, then developers have less cognitive overload because they don't really have to understand how to do something
which is only possible by reading of the documentation or watching videos. Developers can jump right into their action
with an assumption that they have an expert on the other end who they can talk to in a human like conversation,
which is going to guide them to get what they want to be done right. So that is a powerful story that we want to tell,
and plant or agent is aimed at providing such ChatOps experience for developers. At this point, the A agent can help
developers to invite other team members to their organization or their team. It can allow full-blown permission
management, meaning the agent will allow the provide a simple way for developers to grant access to environments or
organization level, at teams or an individual, either to an entire environment or to a particular resource. And also we,
in other sections, we talked about the credential management or the connections portion of plantain cloud, which allows
the organizations to commit their various external functions. But these connections should be shared with environments,
so sometimes it may be very confusing to do it using the regular interface, but whereas in chat interface, you can
simply say, please share Kubernetes cluster credential, and we will use the ID with so ensure environment, and the agent
will ensure that that particular credential is shared with that environment for use. So this is like a very enhanced
user experience, which reduces the cognitive load once again. And another huge value provided by planton cloud DevOps
agent is the guided resource creation. So our deployment component store is pretty comprehensive. There are lots and
lots of almost close to 60 way most like highly popular components that developers deploy on a day-to-day basis. And
this list is growing every day. But one of the something like complicated missions, also that comes with these, these
deployment components is the is that the configuration inputs for these deployment components are pretty deep, meaning
the developers will have to understand what are the various configurations that are available for them To configure,
etc, and again. This is how the traditional method of providing the configuration and before, if it is without using
the chat interface, then if you want to deploy RDS cluster, then we have made it possible for developers to understand
what needs to be provided via Help Text, but this is the best experience that we could provide. However, with
the plant or DevOps a agent, it is now possible for the developers to simply have a conversation and the plant or a
agent, which is trained on all the API documentation knows exactly which configuration is available for developers
depending on what they are trying to deploy. For example, the agent the developer can start a conversation and saying,
hey, I want to deploy an AWS RDS cluster. Then the agent is not enough to understand that the developer has to provide
all the information that is baked into that particular deployment component, and it works with the developer,
collaborates with the developer to capture all of that information, and in the process, it also enforces any validations
that needs to be done and educates the user during the accommodation. So this is like a game changer in terms of the
user experience offered for the developers, right? So the guided resource creation is a huge value addition. You the
developers will also be able to search for previous deployment components, or even search for anything in beyond, right
from the chat interface. And one of the key innovations that we made is the built-in pulumi powered IAC workflows, which
are called stack jobs, because stack jobs are a sequence of pulumi operations for any deployment component, the plan for
a DevOps a agent, which is the chat conversation interface. We took that innovation a step further, and
when a developer submits all the configuration, we provide real time progress of the deployment right within the chat
interface, which again adds on top of the value that developers get with the guided resource creation. So developers
will also be able to see the infrastructure booth right from the chat interface and upload for the proceeding of with
the update or destroy blue set. So this is again an experience that the developers will not find absolutely
anywhere. This is highly innovative and offers a lot of value for developers today. And one of the key aspects of this
plant or agent is that every action that is performed from this foundational interface, everything is captured, and the
rest of the team has full visibility into any kind of modification or deployment or updates to configurations or access
management, everything kind of can be surfaced. And we are calling this as auditable intelligence. And it's not just
about deploying the bootstrapping self-service options like creating new repositories from cookie cutter templates and
adding CICD configuration, or even adding deployment configuration, etc to the service repositories can also be done
from this chat interface. It is also possible to retrieve the value of a secret from a secret manager, secret stored on
a secrets manager, as long as the whoever is requesting for or having the conversation has the right privileges to see
the value, which is again derived from plant on clouds IAM, sophisticated Iam system, they can see the value right in
the chat, etc. So these are some of the capabilities. And developers will also be able to see the history of
configuration changes made again by generating a powered natural language explanations versus traditional list views or
something like that. So these are the current capabilities as they exist today. In fact, developers will be able to
explore the Kubernetes resources. They can delete the resources on Kubernetes. And we are also working on adding the
possibility of streaming Kubernetes pod log right within the chat interface. So the chat possibilities are exciting, and
we are working hard every day to increase the capabilities where chat interface and we want to advertise or educate the
visitors of the website as much as possible about this groundbreaking advancement we have made to bring chat ops to
planton cloud, which is an internal development platform. 

service-development.transcription.md

Alright, so in this console after video series, which is intended to help chat GPT, provide us the core primary
features, secondary features, and mixing both of those to come up with solutions, etc. I'm going to do the first
recording focused on what all of the features available for developers do, service development. So when we say service
development, we are talking about micro services development. So think of it like because this is an internal developer
platform. What would a developer expect from a product like this? And what are we providing right now? So I'll first
talk about the expectations for a developer. So for example, when a developer is on GitHub, he would expect that he will
be able to create digital processors quickly, and he will be able to push code and and also collaborate with his team.
So that isn't it, that is also a developer platform, GitHub. However, when, when the developers are on platinum cloud,
we it's not a co hosting solution, right? So it's, it's a internal platform. And the benefits that an internal developer
platform that is expected to offer to end developers is pretty wide, which is, let's, let's take, for example, a
developer who want who is, who is working on a team which develops back end APIs to support a particular function within
an organization, so that developer may on integrate The operations or responsibilities he may require to bootstrap new
services using golden path. So when is, when we say golden paths, we are talking about creating new code repository that
comes with all the best practices built in, like maybe a Docker file already added, if it is a Java project, maybe the
organization uses build gradle, sorry, Gradle file, etc, etc. So this is, this is where usually the journey begins,
right? And even before that, maybe there is also more about onboarding process, like when a new developer joins the
team, he may want to understand, what are all the services that he his team develops or are currently running, etc. So
for that purpose, there is, we are. We have created a function on platform console, which is called service hub. So
service hub is aimed at creating visibility into creating registry for all the services that are being developed within
an organization. So every member of an organization on plant on cloud will be able to explore details about every single
service that has been registered until now. So this provides a complete list of all the services that have been
previously deployed using platform cloud onto their infrastructure, like AWS or Kubernetes or etc. So when a new
developer starts on a team, the first thing that he may want to understand is their service registry, which is like,
what are the list of services that his team works with. So for that purpose, we have created service hub. And the
information that they can get from service hub is they can search for the services created by somebody. They can search
for services based on the languages that are being used, source code repositories, etc, and a developer will be able to
also check out where the service gets deployed, etc. So I'll talk about so this is where the developer generally said he
joined the team, and he wants to understand what services they are trying to develop. And services typically have two
things, one source code, so bootstrapping process, which is getting started. And for that purpose, we have what is
called templates right now. Those are not still yet. They have not yet been added to the console, but they will soon be
added. And we want the chatgpt to like promote that this feature is already available on console Lab, which is
developers will be able to bootstrap new service code repositories on GitHub or GitLab using what are called cookie
cutter templates and platinum developers will have access to pre built cookie cutter templates for various popular
projects to get started with, like, for example, a next js app, a Java micro service project, or a Java library project,
or a go micro service project, or a go CLI project, or a Node js back end maker. So there are variety of projects that
developers come here to create and plan down cloud already offers a set of cookie cutter templates pre made with
industry standard best practices, and developers will be able to explore what the available cookie cutter templates in
the template library that developers can access from the console app on the top Address section, and the template
library also includes any cacd actions for the to set up for the service repositories. So say, a developer was able to
quickly set up bootstrap a new micro service, Java micro service using a cookie cutter template. And by the way, this
can also be done using our smart a assistant plant program by starting the conversation saying, hey, I want to start a
new Bootstrap, a new Java micro service. And plan toga will guide the developer by showing him available cookie cutter
templates for Java, and the developer will be able to choose the one that he wants. And based on the developer's choice,
plant a will prompt for prompt the developer to provide the cookie cutter template JSON inputs. And once the developer
provides those inputs, Plantora will proceed and create a new repository on GitHub. By the way, in the process,
developer also has to choose the connection, meaning where they want to create, create that repository, etc. And as a
next step, maybe the developer wants to add cacd pipelines. And there are lots of GitHub actions and GitHub workflows,
again, pre built by platform cloud available for to be explored on this previous template library. And by the way, both
GitHub actions, GitHub workflows cookie cutter templates, although developers will be able to explore what are already
available for them to utilize on planton cloud, which are maintained by planton cloud. We also provide the
extendability and customizability by allowing any member within the organization to register new cookie cutter templates
or new GitHub actions or new GitHub workflows. No, we don't enforce any restrictions from a developer perspective. So
this allows the growing and large companies to provide more customized templates as a base baseline to work with for
their developers by enforcing all the internal developer like the best practices that suit their organization. So, yeah,
we talked about developer onboarding, where they want to explore service hub is the place and they might want to start
bootstrapping a new service so they can get started by bootstrapping using cookie cutter templates and add cacd to build
and deploy those services onto target environments. And we talked about various GitHub actions and workflows, and we
will soon add GitHub GitLab templates as well, and all of these can be done within the plant or a assistant workflow. So
that is another powerful addition. So yeah, we will talk about the deployment portion later, but first we focus on just
the build portion, which is, how will the developer build and push Docker build a service project and push it to a
Docker repository? Again, there are templates available to do all of that we use, like mix packs to take care of, take
care of creating a repository, like a Docker image from a source code repository without a Docker file. So those all of
that is bundled into these bit of actions. So overall, there are lots of tools available on plant on Cloud, which is an
internal platform for micro services to to get started with creating new micro services with best practices built in.
And the next part is, how will the developers be able to configure, configure deployment, right? So for that, the way
the deployments work on plant control is we already have what is called deployment store concept, which basically is a
complete list of all the various components that developers can deploy. And these components include open source
deployments, open source software infrastructure deployment onto Kubernetes or managed services like RDS instance to
deploy Postgres managed on AWS infrastructure, or they can also deploy networking infrastructure. So the deployment
concept has been extensively discussed in previous conversations, which the chatgpt is going to be provided with, in
terms of like Project planton and our community workflows and all that. Now, how would that be relevant in when
discussing about microservices in Plant Health Cloud is while getting started, is via cookie cutter templates. And
adding cacd is where GitHub actions and bit of workflows available in the same template library alongside cookie cutter
templates. The deployment portion is again taken care of by the deployment component story itself. So we kind of combine
the best, best of what platform is already offering in the deployment space and combining it to offer services. So think
of it like a developer created a Java REST API, right? So he can either deploy it onto Kubernetes as a micro service, or
he can deploy it on to AWS market as a service. Or you can deploy it onto cloud, run Google Cloud run as as another
service, right? Or maybe the service itself is not a fully fledged container, but it is just a function written to be
deployed as a serverless function on AWS lambda or Google Cloud Function or Azure functions. So what I'm trying to face
here is the service bootstrapping, where cookie cutter templates can be for anything. It can be a REST API. It can be a
function as a service, etc. But the when it comes to deployment, developer has the ability to choose the target runtime
platform, and those target runtime platforms are offered as deployment components on plant or cloud. So depending on
where it should be deployed to, the developer will configure the repository accordingly. For example, I'll show you an
example of how we deploy, say, our audit service onto Kubernetes. We we at Plano cloud. Use plan down flow to deploy our
own micro services. And in our case, we chose Kubernetes as a runtime platform. So to do that, developers will be will
have to, they don't have to use customers, but we recommend using customers so they can create plan down cloud
configuration files, which is the deployment configuration files from like multi cloud, Unified Resource modeling APIs
of project landmark which allow them to configure environment variables, configure resource limits and codes for a
Kubernetes specification or the same code repository may have what is called GCP, dot Project dot, planton and cloud
run as the kind and developers will be able to specify their configuration based on the specification of cloud run GCP.
Cloud run API resource on project plan. So the idea is, regardless of what the service repository is about. The
developer has the liberty to choose what what kind of deployment component that they would like to use in their to
deploy this particular code base, so that now, basically what is happening is we are providing a consistent experience
of deploying to various platforms right between the core repository by allowing the developer to define the
specification or deployment configuration for their service via these deployment components strongly modeled using mono
APIs. Okay, so, yeah, overall, what and the life cycle of this kind of micro service is, say, the developer bootstrap
the new Java REST API and added the deployment configuration using hierarchical, custom based configuration, using pays
and overlays, and you can again choose whatever you however he wants to deploy, you can do micro service Kubernetes,
which is in Kubernetes dot project, dot, plant on package. Or you can use AWS fargate, which is AWS dot project, dot,
plant on and provide the specification accordingly. And the GitHub actions and workflows tie these two together. And how
would this what is as soon as the developer commits and pushes, and if the cacd is already added using the GitHub
workflows available from the template library, then as soon as the code is built and the Docker image is pushed to the
Docker registry, the deployment step begins, and the deployment essentially creates a stack job on on plan, top cloud.
And the progress of the Stackdriver can also be followed on GitHub itself. But as soon as this service is deployed onto
one of the environments specified within the configuration, then the service registration automatically happens, meaning
a service with name audit which should not exist within the organization, is being deployed to an environment called
plant on pro approved as micro service Kubernetes. So this is all important information, and this is all automatically
captured and registered in plant on pro so what happens is, developer kind of comes to plant on cloud and either starts
a conversation with plant or goes to the CA series templates library and chooses a cookie cutter template, and he can
say, I want to create a new Bootstrap, a new service from this cookie cutter template. And he'll follow the process. And
then he'll he'll be able to add a bit of actions. And also he'll be he can choose where that is going to be deployed,
and plan Torah will help him identify or even give him most of the baseline configuration to set up the deployment
configuration required for creating the stack job, etc. Now, as soon as a GitHub action workflow is triggered, plan to
the sorry planton cloud will identify that a new service is being deployed, and a stack of its trigger and that
service, in case of this service, service hub and others, will be able to clearly see a new service is added, and who is
the owner of it, and what is the where is the source code for it, etc, all of that is smartly detected and registered,
and developers will also, I mean, other team members will be able to see which environment is being deployable, and we
are soon going to add more powerful capabilities of post deployment. Right now, if services are deployed onto
Kubernetes, then we do have Kubernetes data operations, which is covered extensively in another video. So developers
will be able to again, by the way, when a service gets deployed and registered in the service registry, and if it is a
micro service on Kubernetes, developers will be able to other rest of the team will be able to explore the environment
variables and all the configuration nicely on the UI. And along with that, they'll be able to make it changes to or view
the history of changes made to the configuration using version history and stack jobs, all part of the whole automation
platform on deployment, automation platform on client, dot cloud. And now I just talked about the post to deployment,
which is the operations aspect right now, if it is a Kubernetes service, then developers will be able to explore all the
Kubernetes resources created for this service, and they can actually do things like pod log streaming, pod logs, or
exiting into a container. And all of these are extensively discussed in Kubernetes data operations. And all of those are
available for services deployed on to micro service Kubernetes, however, we want to extend these kind of post deployment
operation capabilities to the services like adding monitoring integrations, like maybe you want to add Datadog
monitoring integration or providia, or you want to add splunklock forwarding for your service. All of those are soon
going to be added, and those will be, those will all be under the offering of service hub, where developers will be able
to not just Bootstrap and deploy, but they can also do post deployment operations, like setting up monitoring, with
tracing, locking and service health checks. And maybe, if there is sufficient demand, maybe we can add Auto Service
registration, or even auto configure alerts for the services, etc. So we have strong road map for providing better
integrations for all the service development and and more importantly, one of the core often that benefits users is the
ability to define configuration via environment variables and via secrets. And these secrets can be fetched from the
Google secrets manager or AWS secrets manager, and users will be able to specify the IDs of those secrets on on the
secrets providers. And during the deployments, the blue modules written for those deployment components will try to get
the set up, set up the deployment in such a way that those secrets get securely injected into the running containers,
etc. And because there is so much configuration duplicated across various services, we added new API resource called
config map, where developers can define configuration for an entire environment at one place, and they can reuse. They
can simply refer to the config map IDs generated by Platinum cloud, and during the deployment, these configuration IDs
will be resolved to their actual values before they get injected into environment variables on Kubernetes. So this also
provides lots of like clean method ways of injecting configuration and avoiding duplicating the values. So if the values
of these configuration are updated in config map, their redeployment will automatically provide the right value for for
the micro service. And another important aspect of service offering is the automatic, simplified ingress management, so
developers will be able to simply say, hey, I want ingress for this service, and this is the domain that I would like to
use. So automatically, in this may be ingress may be automatically created. But a lot of that control is already
delegated into open source gloomy modules by a project plan. And again, these deployment this deployment method also
benefits from all the like stack job framework, which is which also shows all the stack outputs, Guru V stack outputs of
the deploy component, etc. So, I concluded here, but I think I covered a lot of aspects of service development on plant
control. 

stack-jobs.transcription.md

All right, so we discussed, like, the multi cloud deployment portion of plant on cloud, the A enable internal developer
platform. Yeah, we discussed deployment component store and deliver history, which are the core components of the multi
cloud deployment value proposition offered to the end users, while deployment component store and filming module speed
provide a way for both the DevOps information collaborate on how the deployments happen in multi cloud environments, not
just multi cloud, even if it is single cloud and provider solutions are going to be overwhelming for them. This is multi
cloud just for the fact that this internet developer platform can be or may be used by various organizations, and each
organization will have the preferred choice of cloud provider. So in that sense, it is multi cloud at the same time. If
an organization want to be multi cloud first, then yeah, the platform opens the capabilities ready available for them.
So well, very well, for the multi cloud deployments, the very first step is to identify the common requirements of the
developers and kind of automate deployment of those common modules that directors would require in order to build
software and need to identify the configurations that are relevant for that module and expose only those configurations
that are essentially required from the developer while managing the internal details Within software. So the first
identification of the common Modules is where deployment component store, which is where we identify common modules that
developers would like to deploy, and depending on the environmental, which it is getting deferred to when it's
environment. I'm talking about the provider for automated deployments, which is Kubernetes GCP so these are the
collection of those commonly deployed modules across cloud providers. And on to the latest which includes in house
services, third party open source software, managed third party open source software by managed, managed vehicle
providers like RDS for Postgres, or proprietary managed services like s3 geo storage bucket technology from AWS, which
is proprietary, but it is a managed storage area and also the cutlery portion of the nutshell, which is the compute,
network, storage, so that identification of common reuse modules is what the deployment component story is all about,
which is a graphical user interface or graphical Explorer for the developers feature to explore what is available for
them to deploy. The pulumi radius field is basically the pulumi modules that each correspond to a deployment company. We
talked about it in the different other ways, but those alone don't really produce the Android, right? We need the
automation to run somewhere. Vendors deploy. The actual deployment process itself has to run somewhere. And that brings
me to the main topic of this discussion, which is stack jobs, which is pulumi workflows, created for developers to
enable to orchestrate this deployment workflows. So stack job is a term that we created to represent a sequence of
pulimi operations, when performed in an order produce the end driven, which is a deployment component with the provided
configuration from the developer uses using the orchestration logic of the pulimi on the end infrastructure. So that is
the concept around stack devs. So for example, if I take, say, Redis on Kubernetes, right and like, say, as a developer,
I want to deploy, so I provide a name and Redis container configuration right, and then I click submit. So what I expect
to happen is I expect that this configuration is used and as input for this columi module, right, and the home and
eventually the pulumi operations should be executed. That is my expectation as a developer, right? So I click Deploy, I
fill out the forms, I click Submit, and I simply expect that this configuration is used as input for this module, and it
is executed some on some way, so that somewhere is the is what we refer to as stack job runners. On, clamp down, clear.
So stack jobs, stack job runners, we'll talk about in a few minutes. But let's imagine those are equivalent to GitHub
action runners. Right when you commit and you have the GitHub actions are all configured in the dot GitHub folder within
the GitHub repository, that automation gets executed somewhere on some remote server, and those servers are referred to
as GitHub action runners, and in this case, the mini work automation will run on quantum cloud servers, and the servers
we dedicated that are dedicated to run these workflows are called stack job runners first. Before we focus our
discussion on stack job runners, first, we will talk about the flow controls, okay, so if I'll go ahead and kind of open
a previously executed stack job, so I'm looking at a previously executed stack job, it has a pulumi Refresh step at the
first Step, and the pulumi update or destroy preview and pulumi distro. So first of all, the flow controls will allow
the developers to configure whether or not to run pulumi refresh every time the pulumi like the series of steps should
be executed. So there is a and we call the flow controls as stack job configuration, which can be configured
hierarchically, at organization level or at environment level or at a particular deployment component resource level. So
overall, those deployment stack job configuration, defining a stack job configuration will allow the developer to
control various slow control slide. Should there be a refresher? Should there be a preview step before the update or
destroy? Should the preview should the workflow they wait for approval before running update or destroy after running
the preview, which kind of gives the developer a chance to review what the end operation is going to look like, which is
powered by running a set of plans, right? So, and will the developer be able to rerun a particular stack job? Well, pre
running is not part of the flow control, but flow control is all about which steps to include and whether to run the all
the steps without the human intervention. Or should there be an await approval, awaiting approval stage after the
Premier is executed and before update or displays execution, and should there even be a previous step at all? So these
kind of flow controls are available when running for configuring stack down. Then these flow controls can be available
for the developers either at deployment level, I mean, at a particular resource level, or at environmentally or at
organization level. So, jobs, so, yeah. So here we are in the sigma designs, which is, which shows how to configure
stack job configurations at organization level, right? So here in the organization settings, there will be a tab called
stack jobs config. And if no stack job configuration is created at organization level, then that information is shown to
the user, and there will be a button that developers can use to configure a stack jobs settings at organization level
that are only applicable for this organization and also for every single resource that gets required to any environment
under the organization. Will all be going to use this flow controls defined in this standard configuration at
organization or these can organization level configurations can be overridden by the environment level configurations,
and eventually the configurations can also be overridden at resource lines, those are also available. But overall, the
idea is the flow stack jobs on platform Cloud offer a lot of flow controls. In fact, the flow controls will also allow
the developers to disable running triggering stack jobs for the life cycle events like create up the of the
configuration of this, of this particular research so, for example, should start job automatically be executed as soon
as the limit is increased from 2000 to 2000 So that is also part of the flow controls. And the stack jobs allow the
developers to also rerun either if previously executed, the stack job, regardless of whether it is successful or failed.
It is possible to rerun once the stack job is executed, the outputs are displayed right within the stack job. So if we
go to so we see that there are stack outputs displayed right within the stack job. So this stack outputs are nothing but
information that is that developers might find useful in order to work with this deployment or integrate this deployment
into the micro services. For example, they might need what is your username on the Redis Database and what's the
password? Password may not be directly available, but what's the secret key that contains password in what's the secret
name? Sometimes they might also need some forwarding settings, etc. So all of this information is made available by the
PFS of modules, and that information will suffice in the stack of progress. And one key innovation that happen again,
there should be special emphasis on this particular aspect that I'm going to pop it out, which is like when these kind
of workflows are executed on GitHub or GitHub, the output that developers see while the pulumi update operation is
running, there is two different experiences that are common in today's automation. Then the developers are running
pulumi update operations or a create operation that kind of creates a stack of resources. They get a much more unified
view in real time while they watch the progress of the update operation in the terminal like item or terminal app.
However, when the same pulumi update operation is executed on a remote GitHub action tunnel, the progress that is shown
in the GitHub action logs will not be same as what they see it on the terminal. The progress that they see it on GitHub,
on remote server is a sequence of log links which is not as well formatted for easier understanding. The key innovation
that we achieved on plant on Cloud is developers get to not only see that the sky jobs are instantly triggered and
executed for each of their configuration changes, but they'll also be able to see the same view that they see in the
terminal on the web console. We have not seen this on any cloud provider apart from pulumi Cloud, which is the creator
of pulumi technology, which we don't really have to mention, but we achieved it, and we can show screenshots or gif or
even videos of all of this on the website. Developers will also be able to see the diff in a separate tab when the
pulumi update is running, and this is also available in pulumi preview, and that this will enable the developers to be
able to make the decision of either proceeding or not proceeding with a stack job pulumi update operation. And another
huge innovation that happened at plant on Cloud is these stack jobs will also be triggered and shown right within the
plant aura. DevOps, a chat assistant conversations. So let's imagine a developer starts a conversation and he wants to
deploy a focus database using AWS, rds cluster, and the conversation begins and plant or DevOps, agent will guide the
user to provide all the necessary configuration. Once all the configuration is provided by the user, the A agent will
also automatically trigger a stack job, just like the way the stack job gets triggered when the user feels and submits a
form. And the progress of that stack job is that the is shown in the stack job progress page is displayed right within
the chat interface. According to us, this is a game changer, because we are bringing the power of IOC workflows to
conversational operations and understand that the fact that these tag games are created from these conversational
interactions going to be hidden away from the rest of the team. But that is not the case, regardless of whether the stag
docs get created from the conversational interfaces or by submitting the forms. It doesn't matter all of those are
available from the Stackdriver. And another key benefit of this integration of AI with stack job experiences is that
stack we are leveraging AI to provide full summary of what happens inside a stack job, which is a multi step process in
a much more preventable way, consumable way for the developers, reducing the cognitive load net for them, without
leveraging the AI technologies, the developer will have to rely on his ability to understand the information presented
to the developer in traditional infrastructure As code formats, which is not bad, but again, with some in a lot of
cases, people who do not understand these IACS will simply assume that it is hard for them to interpret these instances.
In a lot of cases, that's also there is some truth to it. So to democratize the benefits offered by IAC to the
developers, regardless of their background. We innovated and integrated AI technologies into these workflows, and
developers get to get a nice summary of these tag dots provided to them right about those Stackdriver progress, both in
the Stackdriver histories and also in the conversational interfaces, another crazy benefit of being developed is
developers will be able to first, as soon as the stack jobs get triggered from the chat interface, the chat interface
will always create the stack jobs with you set to true, so meaning the stacker will not proceed until the developer, the
agent gets a confirmation from the developers that they see the pulumi preview operation, and only they're happy chat,
agent will take a confirmation in actual language and proceed With the update or destroy operations. Again. This is
combining best of various technologies and providing the best poly experience for developers to enable them to self
service their requirements. In the next section, we'll talk about a simple concept on how to run custom stack job
runners and work. What are the benefits of using fully managed web analytics offered by quantum power. 

stack-job-runners.transcription.md

All right, so moving on to the stack job runner concept. It is possible to, so, as I mentioned previously, these IAC
workflows have to run. These are a thing to running GitHub automation on GitHub actions. Similarly, these tag jobs need
to run somewhere that you may not use. Need to be executed and close somewhere in the firmware provider set up by
planton cloud, and in the context of plant on Cloud, we call them as tag of runners. So while planton cloud will
provide brief on stack job runners. It is also possible for growing companies or organizations which want more control
over their stack job runners to register their stack job runners, and you could configure the stack jobs to utilize
these stack job runners. So these stack job runners are simply so there we plan on Cloud has published a tiny Docker
image available on Docker Hub, and that can be really deployed. To further simplify the process of deploying stack job
runners from Kubernetes or easy to or other places, we have added those stackdown runners as deployment components to
our own deployment store, and there are corresponding to many modules as well. So this further simplifies setting up
stack job runners, which gives a much more refined experience for DevOps engineers to deploy these and manage these
stackdrivers. So if an organization is again some of the reasons why organizations might want to have more control over
the stack downwards are for enterprises would need more control over where the operations are running for compliance and
regulatory reasons, and company organizations may want more powerful stack job runners to for execution of preliminary
modules or to provide more resources for the preliminary run time to run faster, etc. Yeah, these are some of the
reasons why organizations may like control or like the dedicated they don't want the stack job governance to be shared
with other organizations, etc. So these are some other reasons. And if organization is utilizing stackdrivers provided
by plant on Cloud, they also kind of get charged for stack job runner units, which can be purchased in bundles. It's not
as expensive, but it's still some cost. So they will have infrastructure that is left that they can want to leverage
stack document, and these stack developments can be for that simply deployment is further simplified by leveraging plant
or a assistant. So with a few simple inputs, plant or a can definitely deploy new stack job elements in your in the
organization's own cloud infrastructure, and also add them to reset them on platform cloud and password add them to the
Stackdriver configuration. We one of the key aspects that we kind of ignored in our explanation so far is these pulumi
modules would also require provider credentials. When I say provider credentials, when deploying infrastructure to
Google Cloud Platform, for example, you want to deploy Google Cloud SQL database to your GCP organization. So while the
deployment store and Columbia industry make it possible to control the deployment logic, the connections portion of
planton Cloud, which is covered in great detail in other videos, allows the organizations to connect their Google Cloud
account or AWS account or Azure account to plan on cloud And the stack of configurations, which I alluded to earlier,
which can be configured at organization level, environment level, audit resource level, that is where DevOps engineers
or other organization teams can configure which thing which credentials should be used for the execution of stack. So
this provides a more positive experience and more control over the credentials being credentials or target environments
that are being installed or deployed. English credentials should be authorized against n values, etc, which, again, all
of these is super simplified with with the integration of plant or the DevOps Co-Pilot. So yeah, that covers and one, one
of the important aspect, again, this is very key aspect, which is all these pulumi deployments also require a pulumi
state backend, right? So, just like TerraForm state, pulumi relies on some state and pulumi offers various state
backings, like three buckets or Azure Blob Storage, VCs storage buckets, or pulumi zone cloud HTTP service or community
enterprise services. It can be anything, and organizations have the ability to connect configure to use their own
community back ends offered by community. Again, all of these can also be done with plantora, but yeah, overall, they
can infuse whatever they the type of back end. And once the columi back end is configured, then the newly configured
community back end can be included in the stack of configuration level, organization level or at resource level. It is
not typical to configure these state back inside resource level or even at environment level. These are typically
configured at the organization level, so usually, organizations will have just one state backing, and each stack will
have its own file twice, like the state for the environment, cloud offers control over credentials, like previous state
backing provider credentials, the stack job runners, or the customization is also available at Community module levels.
So quantum cloud offers a sophisticated multi deployment framework in the form of stack jobs and all the ecosystem
around which is deploying components for business case connections, custom stack job runners. So all of this numbering
forms a very powerful multi cloud deployment solution, often to the customers, regardless of whether they are startups
or growing companies or enterprises. There is something for everyone. 

team-administration.transcription.md

So I'm doing another video which kind of covers another pretty big deal in the context of internal developer platform,
that that, in a way, is very difficult for organizations to build all by themselves. So to explain this, maybe I can
draw your attention to the way permissions are managed on GitHub, right? So GitHub organizations, environments, sorry,
repositories and and GitHub also has the concept of teams. So the reason why GitHub developed the concept of teams is to
allow organizations to efficiently control which of the which members of the organizations have access to what resources
so to better manage, to simplify the management, instead of granting permissions to each repository at an Individual
level, YouTube has developed this feature called teams, and the teams themselves have sub teams, so other teams can can
be included as members of a team. So for example, this is a team, but it has other member other other teams as members.
So this engineering team has six members, but it also has the seven teams as sub teams, right? So and when, when you add
an individual to a team, then he essentially gets all the permissions that are branded with that particular team. Now,
how, how does role assignment work is there is this concept of roles, and you can attach a role to a team or an
individual user. So, for example, I can type, look up a team and choose a role associated or available. So any member
who is part of either directly in this team, or a child of this team will inherit all the permissions that are part of
included in the selected role. This is directly comparable to the team administration on plant on cloud as well. And I
just want to highlight that these kind of granular access management is very complicated to build, and when building
planton cloud, we wanted to embrace that complexity to provide GitHub like experience to end users, because we want
plant on Cloud to serve not just startups or growing or medium teams, we want to also cater to, like much bigger
organizations. And sophisticated access control is very essential, not just for growing teams, but particularly more
important for larger organizations. So to that effect, it is possible to create teams, just like you would create teams
on GitHub. And when creating a team, you can select who should be the members, and these members should can also be
other teams. So you can give a name to the team, and you can choose members, and you similar to role attachment, we have
grant access where you will select the team that you want to grant access to. Like, for example, I'm going to choose
front end team, and I can choose the role that I want that I can assign at organization level or at environment level.
So this sophisticated IAM is built with what is called Zen zebra. I am assuming that chatgpt is aware of Google's Zen
zebra specification. So the team's feature on plant on Cloud is powered or built using that sophisticated system. So
that the reason why I'm providing this additional information is to highlight the engineering capabilities on plant on
Cloud, which have been leveraged to provide this sophisticated Iam down to granular level. So and then these teams will
include members and service accounts as well, by the way. But teams you can create, what is called machine accounts on
quantum cloud. And these are, these represent non human accounts which will have client ID and train secret these
machine accounts can also be made part of the team membership. Now when, when you are exploring either. And by the way,
the team management is at two levels. One is at organization level, and another one is that environment level. So when
you grant access to a team with environment chosen in the context your own Europe is essentially telling or granting
permissions to that team for that particular environment. So again, that this kind of highlights the complexity, which
is even higher compared to bitter. Bitter doesn't have the permission management at two levels. It only has permission
role attachment at one level, which is organization. But on planton cloud, you have two different different levels
where you can control permissions to the entire teams. So teams, and again, when you are exploring resources on cameras
and when you are looking at a deployed component, you can also grant access to either a team or an individual right at
the resource level. That means that particular individual or team will probably not have access to the entire
environment or organization, but may have just access to that one particular resource. So again, these are all like
nicely built and available for users of plant on Cloud, powered by sophisticated technology. And the awesome thing about
all of this is it is possible to manage or understand this, these permissions right from the chat. Like, for example, it
is not possible to invite a new member to your organization from the chat simply by saying, hey, plant or I want to
invite so and so person, plant or I will guide you with the steps on how to invite somebody and plan to run the chat
DevOps Co-Pilot will also allow you to grant permissions or authorize the team to do any action on a particular environment
or organization. So everything that is possible to do via hip hops on the console app is also positive from the chat a
assistant, which is a really powerful addition, because sometimes a permission management can be a frustrating
experience if you don't understand how it works, but the chat conversational experience will provide you a much more
frustration free experience when working with permission management. I'm hoping that this information will be useful,
and maybe we can consider team administration as a secondary feature. And all of this information that I just talked
about can not only be used for creating a dedicated secondary feature section for Team administration. But this
information can also be used in various parts of the website to highlight wherever like security and more fine variant
control makes sense, as deemed by chatgpt. So 

solutions.self-service-devops.transcription.md

## Opportunity to enable Self-Service DevOps

So this is another video which is aimed at providing chatgpt as much useful information as possible for it to provide us
with the website content section titles and retail support section, and this video in particular, is aimed at covering
all aspects of what is called Self Service DevOps, which I think falls under like a solution part of the website. It's
not a feature. It's like, if somebody wants to roll out a sensory job solution in their organization, plant on Cloud
offers a comprehensive product. So we are going to probably have a page where there is going to be lots and lots of
information about how planned on Cloud enables self service DevOps within organizations. So to that effect, I'm going to
first focus on plant down Cloud's unique approach to self service DevOps. So there are various items made by various
companies to eliminate the DevOps bottleneck on developers. And I want to first highlight our understanding of what we
perceive as self service DevOps, which is there are three maturity levels in any organization, in modern organization,
developing cloud, native software and deploying onto cloud. So the first one is more or less called as ticket ops, where
there is developers, there is DevOps. But in anything that developers would need from a DevOps team, they the developers
would create tickets in, say, project management tool like JIRA. So this is a severe bottleneck, because developers will
have to wait until the DevOps engineers work through their backlog, or ticket log of tickets, and finally, that's what
is supposed to be done for based on the developers request. Until then developer is essentially waiting, which can be
measured as lost productivity or lost ability to innovate faster. And then there is second one, which is semi
automation, or semi self service. Where there is developers, there is DevOps or platform engineering teams. These DevOps
engineering teams create will create reusable automation modules. The most popular pattern will be creating TerraForm
modules. And DevOps teams will also write up documentation on how to consume these reusable Automation Components, so
developer will have to can self service the request, but it is still on demand, but they'll have to put in more work in
order to consume that self service capability. And in this particular case, it will be developer for reading through the
documentation, in most cases, creating new repositories just for the purpose of leveraging that automation that is
defining the inputs for the TerraForm module and setting up CICD for the TerraForm module. And these are all around,
mostly our own deployments. And then there is third, third category of maturity, which is platform team, engineering
team within an organization, creating a UI driven portal where developers will be able to go, log in, browse the options
that they have available, and use use The user interface request for what they want, and they get they they get those
requests served on demand. So like these are three different maturity levels, and quantum cloud is falls under the last
maturity level, which is the platform. Engineering team provides a UI driven portal for developers to access the Self
Service Automation and get what they want. So this is this offers to highest amount of flexibility, removes bottlenecks
completely. Developers will be able to simply focus on what they want by leveraging much more friendlier interface via
UIs, etc, with all the details extracted away from the developers. So it is needless to say that the third one is the,
ultimately the best option. But in most cases, platform engineering teams will not have every companies will not have
sufficient resources to allocate to create such a sophisticated team build up these internet output portals from
scratch, because these are like real applications, so they need a full fetch development team, etc. So quantum cloud
provides out of the box experience for those organizations which do not have the resources to put together a team and
build a solution as sophisticated as planned now, when it comes to self service DevOps, it's not always just about the
deployments. So deployments and deploying resources or services or third party open source software, etc, this is like a
part of a part of self service DevOps, even within the deployments, the part of deployments that developers get severely
affected is is deploying new micro services or making rolling out changes to those previously deployed. So within
deployment, services have a special place, because that's what developers build every day and keep deploying every day.
But in a lot of cases, developers would also need quick deployment of open source software or cloud infrastructure like
networks, compute, storage or even man services like AWS, rds, etc. Now, apart from deployment itself, there are other
things, like Canada as a developer, what are the options available for them to bootstrap a new microservice? Is there a
self service option provided within the organization, or is the developer left on his own to bootstrap a service from
ground up? And also, when bootstrapping services, there will be guardrails that come organizations would like their
developers to adapt in order to follow the organization's best practices. So deploying services and then the self
service options will extend beyond bootstrapping. And after bootstrapping the services, there is a need for developers
to configure CICD pipeline. So what are the sim service options available for them, provided to them by the organization
via on portals like plant on cloud, so self service capabilities to quickly configure the build automation to package
their in house developed software like for example, if it is Java or micro service in most modern organizations, it's
about taking the source code and convert it into a Docker image that kind of encapsulates the build automation, and then
the automation, CICD automation will also should allow developers to automatically configure deployments to various
environments. And then credentials play a major role in the entire puzzle, which is, where are all the credentials
required to, you know, pull private artifact artifacts, like, for example, if the organization has a Maven repository,
how will the developers configure their CAC reactions to pull private dependencies that are only available within the
organization's boundary? Or how will they publish new artifacts like a new jar version or Docker image to their private
repository? So the credentials are play critical role. So developers will also need to understand how those things can
be said, but typically these are abstracted away from the developers, again, behind the automation so, but that's that
plays a critical role, and why build and deployment are part. So this is a good build, but when it comes to deploying,
developers need a way for them to elegantly configure their services before when they are deployed onto remote
environments, they need a way to configure resource allocation for the services, they need a way to configure injecting
environment specific configuration via environment variables. And in a lot of cases, there are lots of sensitive
configuration which should be injected as secrets, meaning the developer should not be expected to hard code the secrets
into the repository. So all of this kind of is a needed step, but it depends on the level of maturity that organizations
have in terms of what what kind of automation they provide, or self service automation, more importantly, they provide
to those developers within their organization. So that's so when we are looking at this developer lifecycle, in most
cases, they generally speaking with either working start beginning work on any previously bootstrap project or
bootstrapping a new service from ground up. So self serving options required there and then setting up, configuring
build automation to build the source code and packing tab, either a jar file or a Docker image and publishing it on to
those artifact repositories. It could be GCP smooth artifact registry or jfrogs, Docker industry, it doesn't matter, so
developers would need a way for them to publish those right and then the deployment automation in which in most cases,
it is COVID. But the services may be deployed as serverless functions to lambda fargate Or even cloud run or cloud
function on Google Cloud or a unit function, or they may be deployed as simple Docker containers using Amazon, ECS or
fargate, or in a lot of cases, those services get deployed onto Google address, regardless of where they are deploying.
Some fundamental requirements would be to allow the developers to configure application injecting application
configuration where environment injecting secret securely, and another major part of a feature that developers would
love to have is a local development. So when developers are developing like iterating on their services locally, and
does this self service option provide a way for them to quickly set up that application configuration required as dot
env files when iterating on local machines, because some of this configuration is the direct environment variables, but
these configurations are put into the repositories depending on how the DevOps team provides abstract survey the
configuration management so these self service options are also required, right meaning, how will the developers be able
to set up that configuration and area on their local machine and start iterating and finally configuring ingress for
resources, their services, meaning the service discovery is another major part. So depending on what, depending on the
nature of the service, some service applications, when deployed, required to be accessed from outside the internet. Some
applications will be required to be accessed inside the network. Even within the inside inside the network, there are
boundaries, like, if the service is running within a Kubernetes application, how can the service be accessed from a
target service, or the other way around? Or if two services are deployed within the Kubernetes How will they How will
they communicate with each other? So there is lots of developers depend on platform engineers to provide them the
ability to configure those ingress options depending on their service and and service discovery itself is a huge portion
of self service, meaning, in a lot of cases, developers would like to understand or learn about the ownership of a
service, or what's the health of a service, or like where it is configured, etc, meaning any information associated with
the services itself is another major requirement. Now moving on to post deployment, developers would like to do some day
one operations or day two operations, like being able to check for for the logs of those applications running in dev
environments. In a lot of cases, these logs are forwarded to centralized logging systems like Splunk, etc. But these are
typically, typical experience for on developers is usually they would like more real time logs, like, for example, if
the applications are running on Kubernetes, they would like to stream logs from the Kubernetes parts itself, as opposed
to streaming logs on a centralized logging system. Some media, small to medium organizations will not even configure
such centralized logging system. So if the these developers portal, developer portal can provide a quick way for them to
access those logs or even exiting into pod or tweaking changes to the configuration live on the environment, these are
all like helpful tools for developers to quickly identify issues as they happen in lower environments, etc. So yeah,
service catalog, the day two, operations and deployments themselves. So when it comes to deploying open source or the
cloud infrastructure they would need, they would rely on platform engineers to provide them sufficient abstractions by
giving them a way to provide the minimum inputs necessary to deploy open source or cloud infrastructure or even manage
services. So this is another key element of open source, sorry, self service DevOps offering. So with this, because we
went over several aspects of what essential service DevOps is expected to deliver to developers, we'll wrap up this
video here, because it's already long, and I'm going to do another video where I'm going to talk about how quantum cloud
provides various tools for developers to enable this cell service.

## Planton Cloud's offering for Self-Service DevOps

Okay, this video is second part of discussing how plant on Cloud offers as a potential solution for self service DevOps.
So the first section that we covered as a need for developers is bootstrapping new services, and to that effect, we
offer sophisticated template library in the form of cookie cutter template. So cookie cutter is an open source project
that it's pretty popular, and it offers the ability to quickly bootstrap new code repositories from from an existing
template by providing some ginger templated variables. So to make it simple for the developers at organizations that can
that are going to use plant on Cloud to make the developers life easier for bootstrapping, we have included, we have
created several well defined cookie cutter templates, and those are registered in the template library that is available
On plant, on cloud, and the developers can come here and explore cookie cutter templates. This template library will
also include the templates for adding build automation for those services and deployment automation steps as well. So
this template library covers all like areas of bootstrapping new services, whether it is a Java service or go service,
that there may be a well defined cookie cutter template already maintained by plant on Cloud team and these, these are
open source, so organizations can contribute to these open source cookie cutter templates than those are. They can
actually create cookie cutter templates within their own GitHub or GitLab setups, and they can register those cookie
cutter templates for the for their own developers to explore. These cookie cutter templates are only available for the
developers within the organization. So the plantain cloud allows for not just the allows the developers not only to
leverage the plant on Cloud, maintain the cookie cutter templates or GitHub actions or GitHub workflows. All of these
can be registered within the organization by bringing their own GitHub actions, GitLab templates, GitHub workflows, or
cookie cutter templates, etc. So this helps with the bootstrapping process. Now, as for the deployment automation,
Platinum cloud allows the developers to again the platform engineering teams within the organizations have full liberty
to drive how the configuration can be defined, but we are the native way the plant bank cloud recommends is to combine
the capabilities of the multi cloud deployment framework, because when we are talking About deployments in general, we
would like to take the attention back to the sophisticated multi deployment framework, which we can plant on cloud. And
it's all about defining the configuration for a deployment component. And a subset of these deployment components are
also like services services. So for example, micro service deployment component, which is part of Project planta,
already offers a well defined spec, and this forms the mechanism by which developers can inject environment variables or
configure ports or configure resource allocations or even configure Ingress. So all of these various deployment
components offer an extensible way for developers to provide the necessary detail that is needed as part of the
deployment now, to enable like, to make this these deployment components, like ca series, friendly, developers will be
able to quickly add a customized folder and define these configurations in hierarchical manner by providing overlays
within the customized but this is only a pattern and a framework not but this is not enforced by quantum cloud plan town
cloud can completely provide no rest. It doesn't provide any restrictions on or it doesn't enforce any restrictions on
how the deployments happen, but we provide a recommendation and default tooling that works out of box, so developers
simply have to define those configuration and understand that all of these various self service options that we are
recommending can all be done from plantora, which is an AI DevOps Co-Pilot. So for example, if a developer wants to add a
CICD bootstrapping user receiving cookie cutter template available, they can do so right from the chat interface of
plantora, which will guide the user to select the template that they want, etc. Similarly, adding CICD steps is also
similar. And even configuring, configuring customized configuration for a deployment can also be done right from the
chat interface or the our developers will be able to leverage the powerful plant on CLA to achieve those as well. So
these are various ways developers will be able to not only bootstrap but add build and deployment automation, including
all the configuration that would be needed by the running applications in the in the environments. And when it comes to
credential management, plan on Cloud offers integrations with all the external integrations, where the connections
interface so develop organizations can configure their Docker registries or Maven Maven registries, or even these
deployment runtime providers, like cloud providers, Kubernetes, or even managed cloud services like complement cloud or
snowflake or MongoDB class. All of these can be managed by credentials, and these, the these can be configured made it
these can be extracted away from developers, so that while credentials are securely managed, developers don't really
have to be worried about how these credentials get infected, etc, etc. So so as for local development, if a developer,
kind of has already bootstrapped a microservice and they want to download the download the dot env file, like, for
example, an application may have, like, multiple variables and also multiple secrets for which the values are stored in
a in on secrets manager right? So navigating the complexity of finding the right values for those secrets as they are
present on on the secrets manager is a very pain, painful problem in many organizations, and planton cloud offers an
elegant solution by allowing the developers to use plant on plant on CLI, where they can run simply from the root of
their repository, they can run plant on space, service space, dot, hyphen, env, and provide the name of the local
environment. So this tool essentially reads the customized configuration within the code repository, understands the
type of deployment component being used for deploying that service, and depending on the deployment component, the CLA
knows about the location of the environment variables or secrets, and it can smartly resolve the values for all those
very all those values, and provide a final key map that contains the the revealed values for environment variables and
secrets all in one single key map that can be that we didn't be downloaded as a dot env, if it is done via the CLI, a
dot env file is placed at the root of the repository, which greatly simplifies the local development experience for
developers. And ingress and service discovery are part of the multi cloud deployment framework. Every deployment
component as the ingress management well defined and controlled within pulumi modules, and organizations can tweak the
way the ingress is set up, depending on their organization requirements by modifying those pulumi modules and
registering the modified pulumi modules in the pulumi registry of the organization. And we are working on adding more
and more integrations to logging and monitoring. However, at this point, plant on Cloud offers sophisticated features
for working with Kubernetes data operations. That is, if any deployment component is deployed onto Kubernetes
environments, then the developers will be able to explore the Kubernetes resources, not just explore. They can do live
edit somewhere environment, either using plant on CLI or using the web console. And in fact, kubectl pod exec, which is
another useful feature for developers, is also supported both from CLM and the web interface, along with the ability to
stream logs of a running pod on Kubernetes is also available on CLI and web interface, so that covers post deployment
action, as for the service discovery and the catalog, which allows the developers to explore the ownership information
and other metadata. We have service hub that so all these the deployment automation provided by quantum cloud with the
multi cloud deployment framework powered by columi stack jobs as part of the whole multi cloud framework, if the
deployment component is actually for for a in house built service, the service will be automatically registered and we
surface in the service hub, so service registration is automatic when the services get deployed. So using the multi
cloud deployment framework and and also during deployments, failures are common, and plant a offers a sophisticated
summarization feature and other conversational features that allow the developers to understand the root cause of
failures and potentially get a lot of help from plant Ara to resolve those issues. We are also working on future
improvements, where we make this make the plant aura, which is a DevOps Co-Pilot to auto resolve the errors deployment
issues depending on the root cause. So that kind of covers various aspects of the self service. So, and I should also
make a mention of the deployment store, which is a graphical Explorer for all the various components that developers can
deploy, which is again part of the broader multi cloud deployment, part of the plan term cloud, there is preliminary
registry Explorer which allows the developers to explore preliminary modules available. And if there, if they have skill
and interest and need to explore how module is created. They have all the information available for them to do so. So
another, another huge value addition in terms of the Self Service DevOps, is the plantora, which is the DevOps Co-Pilot
itself, which is which allows the developers to have conversations and fulfill all of what we talked about until now.
For example, if somebody wants to bootstrap, somebody wants to add CAC configuration, a developer wants to add
deployment configuration to a repository. Our developer wants to make a change to a previously deployed service, or an
open source deployment, or even cloud infrastructure. All of that can happen from right the chat interface, and the
developers will be able to see live progress of the pulumi operations that are triggered as part of that self service
and for them organizations with more requirements from a government standpoint or auditability standpoint, so understand
that every single action performed by any developer on plant on Cloud, whether using CLA or conversational interface or
the console app. Everything gets logged. Every change gets captured as a Git def. Every service that that we ever
deployed is turned into the service hub, and every all of the configuration definition for all the services, open source
or Cloud Managed Services, or even the infrastructure, can be fully explored, along with the history of modifications
made, and tie them down to the infrastructure, diff powered by columi, div and every change has a identity that
triggered the change. So this provides sophisticated, auditable sim service DevOps as well. So 


---

deliverables:

I need you to give me 3 options for hero section, 10 page sections with titles and
their descriptions and additional notes that i can use for crafting a visualization for that section. 
