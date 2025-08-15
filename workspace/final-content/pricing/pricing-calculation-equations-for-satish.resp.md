# Pricing Calculator Formulas

Below are concise formulas and rules for implementing our pricing calculator. **Prorated calculations are not included.**

---

## 1. Seat Subscription

### Free Plan
- **Price per seat**: $0  
- **Billing**: Not applicable (no charge).

### Team Plan (Annual)
- **Price per seat**: $9 per year  
- **Billing**: Billed upfront for the year.

### Enterprise/Custom Plan
- **Price per seat**: Negotiated.

---

## 2. Usage-Based Billing

All plans (Free, Team, Enterprise) include monthly usage limits for three usage metrics:
1. **Copilot Messages**  
2. **automation runner minutes**  
3. **IaC Resource Hours**

Once you exceed the included amounts, overage charges apply.

### 2.1 Copilot Messages

**Free Plan**  
- Included messages: 50  
- Overage rate: $0.02 per message  

**Team Plan**  
- Included messages: 500  
- Overage rate: $0.02 per message  

**Formula**:
```txt
extraChargeForCopilot = max(0, totalMessages - includedMessages) * 0.02

Example (Free Plan)
  * totalMessages = 80
  * includedMessages = 50
  * Overage = 80 - 50 = 30 messages
  * extraChargeForCopilot = 30 × $0.02 = $0.60

2.2 automation runner minutes

Free Plan
  * Included minutes: 100
  * Overage rate: $0.008 per minute

Team Plan
  * Included minutes: 1,000
  * Overage rate: $0.008 per minute

Formula:

extraChargeForDeployment = max(0, totalMinutes - includedMinutes) * 0.08

Example (Free Plan)
  * totalMinutes = 120
  * includedMinutes = 100
  * Overage = 120 - 100 = 20 minutes
  * extraChargeForDeployment = 20 × $0.008 = $0.16

2.3 IaC Resource Hours

Free Plan
  * Included resource hours: 150K

Team Plan
  * Included resource hours: 1.5M

Overage Rate (applies once exceeded for any plan):
  * $0.0001 per resource hour

Formula:
	1.	Track how many resources exist each hour of the month.
	2.	Sum up all those resource counts for each hour to get totalResourceHours.
	3.	Calculate overage:

extraChargeForResources = max(0, totalResourceHours - includedResourceHours) * 0.0001

Example (Team Plan)
  * totalResourceHours = 1.6M
  * includedResourceHours = 1.5M
  * Overage = 1.6M - 1.5M = 100K resource hours
  * extraChargeForResources = 100K × $0.0001 = $10

3. Monthly Usage Cost

Add up the usage-based charges:

monthlyUsageCost 
  = extraChargeForCopilot
  + extraChargeForDeployment
  + extraChargeForResources

4. Example Monthly Invoice
  * Seat Subscription
  * Team plan with 10 seats: 10 × $9 = $90 (annual total, paid upfront)
  * Usage-Based Overages (Monthly)
  * Copilot messages overage
  * automation runner minutes overage
  * IaC resource hours overage

monthlyInvoice = monthlyUsageCost
