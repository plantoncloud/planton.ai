I need to explain the formula equations for my front-end developer to implement the pricing calculator page we have created.

I’m going to give you a detailed description of how we are going to bill our customers. We are a B2B, subscription-based monthly or yearly service for software developers. An organization with developers can get a subscription from us, and they will have to purchase seats for their developers.

We have three different plans:
	1.	Free
	2.	Team
	3.	Custom/Enterprise

Free Plan
	•	Price per seat: $0

Team Plan
	•	Price per seat: $9 (annual subscription)
	•	They have to pay the total seat subscription price upfront for the year.
	•	Any new seats added later in the year will be charged on a prorated basis for the remaining months of that year.

Both the Free plan and the Team plan have usage-based components. Let’s start with the simpler usage-based components:

1. Copilot Messages

Each plan includes a certain number of Copilot messages for free, and then charges a per-message fee once the included messages are exceeded.
	•	Free Plan:
	•	50 Copilot messages included.
	•	After 50 messages, $0.02 per message.
	•	Team Plan:
	•	500 Copilot messages included.
	•	After 500 messages, $0.02 per message.

Calculation
	1.	Let totalMessages = total number of Copilot messages used during the month.
	2.	Let includedMessages = 50 (Free) or 500 (Team), depending on the subscription.
	3.	If totalMessages ≤ includedMessages, there is no extra charge.
	4.	If totalMessages > includedMessages, extra charge = (totalMessages - includedMessages) × $0.02.

Example
	•	Free Plan Example:
	•	Total used messages in a month = 80
	•	Included = 50
	•	Chargeable messages = 80 - 50 = 30
	•	Usage charge = 30 × $0.02 = $0.60
	•	Team Plan Example:
	•	Total used messages in a month = 300
	•	Included = 500
	•	Since 300 < 500, no additional usage charge.

2. automation runner minutes

Similar to Copilot messages, each plan has some free included minutes for deployments, and a per-minute charge once those are exceeded.
	•	Free Plan:
	•	100 automation runner minutes included.
	•	After 100 minutes, $0.08 per minute.
	•	Team Plan:
	•	1,000 automation runner minutes included.
	•	After 1,000 minutes, $0.08 per minute.

Calculation
	1.	Let totalMinutes = total automation runner minutes used in a month.
	2.	Let includedMinutes = 100 (Free) or 1,000 (Team).
	3.	If totalMinutes ≤ includedMinutes, there is no extra charge.
	4.	If totalMinutes > includedMinutes, extra charge = (totalMinutes - includedMinutes) × $0.08.

Example
	•	Free Plan Example:
	•	Total used automation runner minutes in a month = 120
	•	Included = 100
	•	Chargeable minutes = 120 - 100 = 20
	•	Usage charge = 20 × $0.08 = $1.60
	•	Team Plan Example:
	•	Total used automation runner minutes in a month = 900
	•	Included = 1,000
	•	Since 900 < 1,000, no additional usage charge.

3. IaC (Infrastructure as Code) Resources

This is the trickiest usage-based component. It is inspired by Pulumi’s resource model. Essentially, when developers deploy infrastructure, those deployments will result in Pulumi or Terraform resources. We charge based on resource hours, similar to how Pulumi Cloud charges its customers.

Pulumi Concept (for reference)
	•	Each Pulumi “credit” = 1 hour of a Pulumi resource in the backend state.
	•	Example: If an EKS cluster is deployed for 10 hours and creates 50 resources, that’s 50 × 10 = 500 Pulumi credits.

Our Model
	•	We call them resource hours instead of credits.
	•	Free Plan includes 150,000 resource hours (we often say “200 resources included” as an approximation to keep it simple, but effectively that’s 200 resources × 24 hours × 31 days, etc., depending on our monthly calculation—it’s just roughly 150K resource hours).
	•	Team Plan includes 1.5 million resource hours (we often say “2,000 resources included” similarly).
	•	Additional resource hours cost $0.0001 per hour once the included resource hours are exceeded.

How We Calculate
	1.	Throughout the month, track how many resources exist each hour.
	2.	Sum up all those resource counts for each hour to get the total resourceHours.
	3.	Let includedResourceHours = 150K (Free) or 1.5M (Team).
	4.	If resourceHours ≤ includedResourceHours, there is no extra charge.
	5.	If resourceHours > includedResourceHours, extra charge = (resourceHours - includedResourceHours) × $0.0001.

Example (Free Plan)
	•	Suppose a user deploys an EKS cluster that creates 50 resources and they keep it running for 10 hours.
	•	Total resource hours for that cluster = 50 resources × 10 hours = 500 resource hours.
	•	The user’s remaining hours for the month are 150,000 - 500 = 149,500.
	•	No extra charge in this scenario if they stay below 150,000 total resource hours by month’s end.

Example (Team Plan)
	•	A user has multiple deployments adding up to 1,600,000 resource hours in a month.
	•	Included resource hours = 1,500,000.
	•	Chargeable resource hours = 1,600,000 - 1,500,000 = 100,000.
	•	Usage charge = 100,000 × $0.0001 = $10.

Putting It All Together
	1.	Seat Subscriptions
	•	Free Plan = $0 per seat.
	•	Team Plan (annual) = $9 per seat (billed annually).
	•	Custom/Enterprise Plan = negotiated pricing.
	2.	Usage-Based Billing
	•	Copilot Messages
	•	$0.02 per message after included messages.
	•	automation runner minutes
	•	$0.08 per minute after included minutes.
	•	IaC Resource Hours
	•	$0.0001 per resource hour after included resource hours.
	3.	Proration for Seats
	•	If a new seat is added mid-year on the Team plan, charge prorated seat cost for the remaining months of the subscription year.
	4.	Monthly Usage Calculation
	•	Sum usage of Copilot messages, automation runner minutes, and IaC resource hours.
	•	Subtract the included amounts for the plan.
	•	Multiply any overage by the respective usage rates.

This breakdown should help the front-end developer understand how to write the formulas for the pricing calculator.
