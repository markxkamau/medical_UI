Steps to the program

1. **Step 1: Homepage to attract attention of user**
2. **Step 2: One wanting to use our services has to create an account**
    1.  Registration
    2.  Account creation
    3.  Email verification
    4.  User login
    5.  Information Collected :: Name, Email, Phone Number, Password
3. **Step 3: Offer options on next steps to proceed**
   1. Medication survey i.e Stock, Drugs, Doses
   2. Symptom survey i.e. Fever, Headache, etc.
   3. Health survey i.e. Main body organs: heart, brain, liver etc.
   4. Daily Schedule survey i.e. Medication time, Sleep time, etc.
4. **Step 4: Based on the user's input, provide personalized recommendations**
   1. Making use of survey to identify loopholes and notify user
   2. User tries to keep a consistency
   3. Should any new issues pop up, root back to main cause
5. **Step 5: User can track their progress**


Step 1: 
Includes one page - HomePage
Step 2:
Includes 5 pages - Registration, AccountCreation, EmailVerification, UserLogin, InformationCollected
Step 3:
Includes 4 pages - MedicationSurvey, SymptomSurvey, HealthSurvey, DailyScheduleSurvey
MedicationSurvey consists of CreateDrugPage, UpdateDrugPage, DeleteDrugPage, GetDrugPage etc.
SymptomSurvey consists of CreateSymptomPage, UpdateSymptomPage, DeleteSymptomPage, GetSymptomPage etc.
HealthSurvey consists of CreateHealthPage, UpdateHealthPage, DeleteHealthPage, GetHealthPage etc.
DailyScheduleSurvey consists of CreateSchedulePage, UpdateSchedulePage, DeleteSchedulePage, GetSchedulePage
Step 4:
Includes 4 pages - PersonalizedRecommendationPage, ConsistencyPage, RootCausePage, Progress
PersonalizedRecommendationPage


1. <Registration Form (for initial user sign-up)>

Purpose: Collect basic user information like name, email, condition, etc.
Fields:
First Name
Last Name
Email
Password
Health Condition
This is typically a one-time form when the user first signs up. After submission, the user can be directed to a dashboard or profile page where they can manage additional information.

2. <User Profile Page (after registration, where the user can manage their profile)>

Purpose: Allow users to update their basic info and manage medications, schedules, and health records.
Components:
Personal Details (editable)
Health Records (add/edit/remove)
Medications (add/edit/remove)
Medication Schedule (view/edit)
This page will have sections for managing the following:

3. <Add/Edit Medications: Users can select drugs from a predefined list, input dosages, and set schedules.>
4. <Add/Edit Health Records: Users can log any new health check-ups, doctor visits, or medical tests.>
Medication Schedule: Users can see their medication list along with scheduled times.
Separate Pages/Forms for Medications and Schedules:

5. <Medication Form: This could be a separate page or a modal where users can add or edit their medications.>

Fields for selecting medications, specifying dosages, and choosing times.
Example:
Select Medication (dropdown or search box)
Enter Dosage (input box)
Select Time of Day (time picker or text input)
Health Record Form: Another page or modal to add/update health records with fields for dates and notes.

Schedule Overview Page: This can display a table or list showing all medications with their respective schedules, allowing users to see their full medication regimen.

Flow Example:
**Registration Flow:**

User registers with basic info (name, email, condition).
Once registered, the user is logged in and taken to the User Profile Page.
**User Profile Management:**

On the profile page, the user can see their basic details and choose to edit medications, health records, etc.
Users are not asked to input medication information during registration. Instead, they are invited to add medications and schedules after they sign in.
**Medication Management:**

Users click on an "Add Medication" button.
A new form or modal opens where they can select medications (from a predefined list), specify dosages, and set times.
After adding a medication, it gets linked to their profile.
**Health Records:**

The user can log health records by filling out a simple form with a date and notes, and they can view and edit them later.