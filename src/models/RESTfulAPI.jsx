<Route path="/dashboard" element={<Dashboard />} />;
{
  /* Overview of the app, user data, health status, etc. */
}

{
  /* Users/Patients */
}
<Route path="/users" element={<UserList />} />;
{
  /* List of all users/patients */
}
<Route path="/user/:userId" element={<UserDetail />} />;
{
  /* Detailed view of a specific user/patient */
}
<Route path="/createUser" element={<CreateUser />} />;
{
  /* Form to create a new user */
}
<Route path="/user/:userId" element={<UserDetail />}>
  <Route path="medications" element={<UserMedications />} />
  <Route path="drug-schedules" element={<UserDrugSchedules />} />
  <Route path="health-records" element={<UserHealthRecords />} />
</Route>
{
  /* Medications */
}
<Route path="/medications" element={<MedicationList />} />;
{
  /* List of all medications */
}
<Route path="/medication/:medicationId" element={<MedicationDetail />} />;
{
  /* Medication details */
}
<Route path="/createMedication" element={<CreateMedication />} />;
{
  /* Form to add a new medication */
}
<Route path="/updateMedication/:medicationId" element={<UpdateMedication />} />;
{
  /* Form to update medication */
}

{
  /* Drug Schedules */
}
<Route path="/drug-schedules" element={<DrugScheduleList />} />;
{
  /* List of all drug schedules */
}
<Route path="/drug-schedule/:scheduleId" element={<DrugScheduleDetail />} />;
{
  /* Drug schedule details */
}
<Route path="/createDrugSchedule" element={<CreateDrugSchedule />} />;
{
  /* Form to create a new drug schedule */
}
<Route
  path="/updateDrugSchedule/:scheduleId"
  element={<UpdateDrugSchedule />}
/>;
{
  /* Form to update a schedule */
}

{
  /* Drug Stocks */
}
<Route path="/drug-stocks" element={<DrugStockList />} />;
{
  /* List of drug stocks */
}
<Route path="/drug-stock/:stockId" element={<DrugStockDetail />} />;
{
  /* Drug stock details */
}
<Route path="/createDrugStock" element={<CreateDrugStock />} />;
{
  /* Form to create/update drug stock */
}

{
  /* Health Records */
}
<Route path="/health-records" element={<HealthRecordList />} />;
{
  /* Overview of health records */
}
<Route path="/health-record/:userId" element={<HealthRecordDetail />} />;
{
  /* Health records of a specific user */
}
<Route path="/createHealthRecord" element={<CreateHealthRecord />} />;
{
  /* Form to create health record */
}
