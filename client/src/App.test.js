<Routes>
        {/* AUTH ROUTES */}
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/" element={<Home />} />

        {/* STUDENT DASHBOARD ROUTES */}
        <Route path="/studentdashboard" element={<StudentDashboard />}>
          <Route path="" element={<Dashboard />} />
          <Route path="classes" element={<BrowseClasses />} />
        </Route>

        {/* TEACHERDASHBOARD ROUTES */}
        <Route path="/teacherdashboard" element={<TeacherDashboard />}>
          <Route path=":username/enrollments" element={<EnrollmentsPage />} />
          <Route
            path=""
            element={<Navigate to="/teacherdashboard/classes" />}
          />
          <Route path="createnewcourse" element={<CreateNewClass />} />
          <Route path=":classid" element={<ClassPage />} />
          <Route path="classes" element={<CoursesGrid />} />
          <Route path=":classid/resources" element={<ClassResourcesPage />} />
          <Route path=":classid/configure" element={<ConfigureClass />} />
        </Route>

        {/* CLASS ROUTES */}
        <Route path="/class">
          <Route path="" element={<NotFoundPage />} />
          <Route path=":classid" exact element={<ClassPage />} />
          <Route path=":classid/:postid" exact element={<PostPage />} />
          <Route path=":classid/:postid/edit" element={<PostPage />} />
          <Route
            path=":classid/resources"
            exact
            element={<ClassResourcesPage />}
          />
          <Route path=":classid/configure" element={<ConfigureClass />} />
          <Route path=":classid/newpost" element={<NewPostPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
        {/* ACCOUNT PAGE  */}
        <Route path="/account" element={<AccountPage />}>
          <Route path="" element={<Account />} />
          <Route path="password" element={<Password />} />
          <Route path="delete" element={<DeleteAccount />} />
        </Route>
        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="" element={<AdminDashboard />} />
          <Route path="login" element={<AdminLogin />} />
          {/* USERS MANAGEMENT */}
          <Route path="teachers" element={<TeachersConsole />} />
          <Route path="teachers/createnew" element={<TeachersConsole />} />

          <Route path="students" element={<StudentsConsole />} />
          <Route path="subadmins" element={<SubadminsConsole />} />
        </Route>

        {/* QUIZZ SYSTEM */}
        <Route>
          <Route path="/quizzes" element={<QuizzIndex />} />
          {/* DEPARTMENT PAGE: TO CHOOSE SUBJECT FROM LIST OF ALL SUBJECTS IN THIS DEPARTMENT */}
          <Route path="/quizzes/:departmentid/subjects" element={<DepartmentPage />} />
          <Route path="/quizzes/:departmentid/" element={<DepartmentPage />} />
          
          {/* SUBJECT PAGE: TO CHOOSE CHAPTER FROM LIST OF ALL CHAPTERS IN THIS SUBJECT */}
          <Route path="/quizzes/:subjectid/chapters" element={<SubjectPage />} />
          <Route path="/quizzes/:subjectid" element={<SubjectPage />} />
          {/* ROUTING FOR ACTUAL QUIZZ PAGE */}
          <Route path="/quizz">
            <Route path=":subjectid" element={<SubjectQuizzPage />} />
            <Route path="result" element={<QuizzResultPage />} />
          </Route>
        </Route>

        <Route path="/verifyStudent/:courseId/:secretKey/:email" element={<VerifyStudent />} />

      </Routes>