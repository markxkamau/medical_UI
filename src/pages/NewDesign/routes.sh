<Route path="/dashboard" element={<Dashboard />} />;
            <Route path="/users" element={<UserList />} />;
            <Route path="/user/:userId" element={<UserDetail />} />;
            <Route path="/createUser" element={<CreateUser />} />;
            <Route path="/user/:userId" element={<UserDetail />}>
              <Route
                path="medications"
                element={<UserMedication id={userId} />}
              />
              <Route
                path="drug-schedules"
                element={<UserDrugSchedules id={userId} />}
              />
              <Route
                path="health-records"
                element={<UserHealthRecords id={userId} />}
              />
            </Route>
            <Route path="/medications" element={<MedicationList />} />;
            <Route
              path="/medication/:medicationId"
              element={<MedicationDetail />}
            />
            <Route path="/createMedication" element={<CreateMedication />} />;
            <Route
              path="/updateMedication/:medicationId"
              element={<UpdateMedication />}
            />
            <Route path="/drug-schedules" element={<DrugScheduleList />} />;
            <Route
              path="/drug-schedule/:scheduleId"
              element={<DrugScheduleDetail />}
            />
            <Route
              path="/createDrugSchedule"
              element={<CreateDrugSchedule />}
            />
            <Route
              path="/updateDrugSchedule/:scheduleId"
              element={<UpdateDrugSchedule />}
            />
            <Route path="/drug-stocks" element={<DrugStockList />} />;
            <Route path="/drug-stock/:stockId" element={<DrugStockDetail />} />;
            <Route path="/createDrugStock" element={<CreateDrugStock />} />;
            <Route path="/health-records" element={<HealthRecordList />} />;
            <Route
              path="/health-record/:userId"
              element={<HealthRecordDetail />}
            />
            <Route
              path="/createHealthRecord"
              element={<CreateHealthRecord />}
            />