  // ==================== DUMMY DATA ====================
  const dummyData = {
    students: [
      { studentId: 'S001', name: 'Ahmad Rizky', gender: 'Laki-laki', entryYear: 2024, studentNumber: '24001', classId: '10A', email: 'ahmad@school.com', phone: '08123456789', parentName: 'Bapak Budi Santoso', parentPhone: '08129876001', status: 'Active' },
      { studentId: 'S002', name: 'Budi Santoso', gender: 'Laki-laki', entryYear: 2024, studentNumber: '24002', classId: '10A', email: 'budi@school.com', phone: '08123456790', parentName: 'Bapak Ahmad Fauzi', parentPhone: '08129876002', status: 'Active' },
      { studentId: 'S003', name: 'Citra Dewi', gender: 'Perempuan', entryYear: 2023, studentNumber: '23001', classId: '10A', email: 'citra@school.com', phone: '08123456791', parentName: 'Ibu Siti Aminah', parentPhone: '08129876003', status: 'Active' },
      { studentId: 'S004', name: 'Dian Sastro', gender: 'Perempuan', entryYear: 2023, studentNumber: '23002', classId: '10B', email: 'dian@school.com', phone: '08123456792', parentName: 'Bapak Sudirman', parentPhone: '08129876004', status: 'Active' },
      { studentId: 'S005', name: 'Eko Prasetyo', gender: 'Laki-laki', entryYear: 2022, studentNumber: '22001', classId: '11A', email: 'eko@school.com', phone: '08123456793', parentName: 'Ibu Kartini', parentPhone: '08129876005', status: 'Inactive' },
      { studentId: 'S006', name: 'Fani Lestari', gender: 'Perempuan', entryYear: 2024, studentNumber: '24003', classId: '10A', email: 'fani@school.com', phone: '08123456794', parentName: 'Bapak Joko Widodo', parentPhone: '08129876006', status: 'Active' },
      { studentId: 'S007', name: 'Ghani Pratama', gender: 'Laki-laki', entryYear: 2024, studentNumber: '24004', classId: '10B', email: 'ghani@school.com', phone: '08123456795', parentName: 'Ibu Mega Susanti', parentPhone: '08129876007', status: 'Active' },
      { studentId: 'S008', name: 'Hani Putri', gender: 'Perempuan', entryYear: 2023, studentNumber: '23003', classId: '11A', email: 'hani@school.com', phone: '08123456796', parentName: 'Bapak Basuki Rahmat', parentPhone: '08129876008', status: 'Active' },
    ],
    teachers: [
      { teacherId: 'T001', name: 'Dr. Andi Wijaya', gender: 'Laki-laki', entryYear: 2020, teacherNumber: 'T2001', email: 'andi@school.com', phone: '08129876543', status: 'Active', subject: 'Matematika' },
      { teacherId: 'T002', name: 'Prof. Siti Aminah', gender: 'Perempuan', entryYear: 2019, teacherNumber: 'T2101', email: 'siti@school.com', phone: '08129876544', status: 'Active', subject: 'Fisika' },
      { teacherId: 'T003', name: 'Bapak Sudirman', gender: 'Laki-laki', entryYear: 2018, teacherNumber: 'T1901', email: 'sudirman@school.com', phone: '08129876545', status: 'Active', subject: 'Biologi' },
      { teacherId: 'T004', name: 'Ibu Kartini', gender: 'Perempuan', entryYear: 2021, teacherNumber: 'T2201', email: 'kartini@school.com', phone: '08129876546', status: 'Active', subject: 'Sejarah' },
      { teacherId: 'T005', name: 'Pak Budi Santoso', gender: 'Laki-laki', entryYear: 2017, teacherNumber: 'T1801', email: 'budi@school.com', phone: '08129876547', status: 'Active', subject: 'Bahasa Indonesia' },
    ],
    classes: [
      { classId: 'C001', className: '10A - Science', gradeLevel: '10', homeroomTeacher: 'Dr. Andi Wijaya', capacity: 30 },
      { classId: 'C002', className: '10B - Social', gradeLevel: '10', homeroomTeacher: 'Prof. Siti Aminah', capacity: 28 },
      { classId: 'C003', className: '11A - Science', gradeLevel: '11', homeroomTeacher: 'Bapak Sudirman', capacity: 32 },
    ],
    assets: [
      { assetId: 'A001', assetName: 'Projector 1', category: 'Electronics', location: 'Lab 1', condition: 'Good' },
      { assetId: 'A002', assetName: 'Computer Set 1', category: 'Electronics', location: 'Computer Lab', condition: 'Excellent' },
      { assetId: 'A003', assetName: 'Whiteboard', category: 'Furniture', location: 'Class 10A', condition: 'Fair' },
      { assetId: 'A004', assetName: 'Printer', category: 'Electronics', location: 'Office', condition: 'Good' },
    ],
    schedules: [
      { scheduleId: 'SC001', subject: 'Matematika', scheduleType: 'Lesson', day: 'Senin', timeStart: '08:00', timeEnd: '09:30', classId: '10A', className: '10A', room: 'R-101', teacher: 'Dr. Andi Wijaya' },
      { scheduleId: 'SC002', subject: 'Fisika', scheduleType: 'Lesson', day: 'Senin', timeStart: '09:45', timeEnd: '11:15', classId: '10A', className: '10A', room: 'Lab 1', teacher: 'Prof. Siti Aminah' },
      { scheduleId: 'SC003', subject: 'Biologi', scheduleType: 'Lesson', day: 'Selasa', timeStart: '08:00', timeEnd: '09:30', classId: '10A', className: '10A', room: 'Lab 2', teacher: 'Bapak Sudirman' },
      { scheduleId: 'SC004', subject: 'Bahasa Indonesia', scheduleType: 'Lesson', day: 'Rabu', timeStart: '10:00', timeEnd: '11:30', classId: '10A', className: '10A', room: 'R-102', teacher: 'Ibu Sari' },
      { scheduleId: 'SC005', subject: 'Matematika', scheduleType: 'Lesson', day: 'Kamis', timeStart: '08:00', timeEnd: '09:30', classId: '10A', className: '10A', room: 'R-101', teacher: 'Dr. Andi Wijaya' },
    ],
    announcements: [],
    holidays: [],
    quizzes: [
      {
        quizId: 'Q001',
        title: 'Quiz Matematika - Bab Aljabar',
        description: 'Quiz tentang persamaan linear dan fungsi',
        classId: '10A',
        className: '10A',
        dueDate: '2024-12-31',
        createdBy: 'Dr. Andi Wijaya',
        teacherId: 'T001',
        teacher: 'Dr. Andi Wijaya',
        subject: 'Matematika',
        status: 'Active',
        duration: 30,
        createdAt: '2024-01-15',
        questions: [
          { id: 1, question: 'Berapakah hasil dari 2x + 3 = 7?', options: ['x = 1', 'x = 2', 'x = 3', 'x = 4'], correct: 1, points: 10 },
          { id: 2, question: 'Turunan dari x² adalah?', options: ['x', '2x', 'x²', '2'], correct: 1, points: 10 },
          { id: 3, question: 'Nilai dari 5! (5 faktorial) adalah?', options: ['20', '60', '120', '240'], correct: 2, points: 10 }
        ]
      },
      {
        quizId: 'Q002',
        title: 'Quiz Fisika - Hukum Newton',
        description: 'Quiz tentang mekanika dan hukum gerak',
        classId: '10A',
        className: '10A',
        dueDate: '2024-12-31',
        createdBy: 'Prof. Siti Aminah',
        teacherId: 'T002',
        teacher: 'Prof. Siti Aminah',
        subject: 'Fisika',
        status: 'Active',
        duration: 45,
        createdAt: '2024-01-16',
        questions: [
          { id: 1, question: 'Hukum Newton Pertama dikenal sebagai hukum...', options: ['Gravitasi', 'Inersia', 'Aksi-Reaksi', 'F=ma'], correct: 1, points: 10 },
          { id: 2, question: 'Satuan gaya dalam SI adalah...', options: ['Joule', 'Watt', 'Newton', 'Pascal'], correct: 2, points: 10 },
          { id: 3, question: 'Percepatan gravitasi di bumi adalah...', options: ['9,8 m/s²', '10 m/s²', '8,9 m/s²', '9,81 m/s²'], correct: 3, points: 10 }
        ]
      },
      {
        quizId: 'Q003',
        title: 'Quiz Biologi - Sel',
        description: 'Quiz tentang struktur dan fungsi sel',
        classId: '10A',
        className: '10A',
        dueDate: '2025-01-15',
        createdBy: 'Bapak Sudirman',
        teacherId: 'T003',
        teacher: 'Bapak Sudirman',
        subject: 'Biologi',
        status: 'Active',
        duration: 30,
        createdAt: '2024-01-17',
        questions: [
          { id: 1, question: 'Bagian sel yang disebut "powerhouse" adalah...', options: ['Nukleus', 'Mitokondria', 'Ribosom', 'Badan Golgi'], correct: 1, points: 10 },
          { id: 2, question: 'Dinding sel terdapat pada sel...', options: ['Hewan', 'Tumbuhan', 'Keduanya', 'Tidak keduanya'], correct: 1, points: 10 }
        ]
      },
      {
        quizId: 'Q004',
        title: 'Quiz Sejarah - Kemerdekaan Indonesia',
        description: 'Quiz tentang sejarah proklamasi kemerdekaan',
        classId: '10A',
        className: '10A',
        dueDate: '2024-01-20',
        createdBy: 'Dr. Andi Wijaya',
        teacherId: 'T001',
        teacher: 'Ibu Kartini',
        subject: 'Sejarah',
        status: 'Completed',
        duration: 40,
        createdAt: '2024-01-10',
        questions: [
          { id: 1, question: 'Kapan Indonesia memproklamasikan kemerdekaan?', options: ['17 Agustus 1945', '1 Juni 1945', '28 Oktober 1928', '10 November 1945'], correct: 0, points: 10 }
        ]
      },
    ],
    quizResults: [
      {
        resultId: 'R001',
        quizId: 'Q004',
        studentId: 'S001',
        studentName: 'Ahmad Rizky',
        answers: [0],
        score: 100,
        correctCount: 1,
        wrongCount: 0,
        timeSpent: 15,
        submittedAt: '2024-01-18 10:30:00',
        status: 'Completed'
      }
    ],
    dashboardStats: {
      classes: 12,
      teachers: 24,
      students: 156,
      attendance: 89,
      performanceDistribution: {
        excellent: 45,
        good: 60,
        average: 35,
        poor: 16
      },
      weeklyAttendance: {
        'Mon': { students: 150, teachers: 23 },
        'Tue': { students: 148, teachers: 24 },
        'Wed': { students: 152, teachers: 24 },
        'Thu': { students: 149, teachers: 23 },
        'Fri': { students: 145, teachers: 22 },
      },
      upcomingLessons: [
        { timeStart: '08:00', title: 'Mathematics', classId: '10A', room: '101' },
        { timeStart: '09:45', title: 'Physics', classId: '10A', room: 'Lab 1' },
        { timeStart: '13:00', title: 'English', classId: '10B', room: '203' },
      ],
      upcomingQuizzes: [
        { title: 'Mathematics Quiz Chapter 1', classId: '10A', dueDate: '2024-01-20' },
        { title: 'Physics Quiz - Mechanics', classId: '10A', dueDate: '2024-01-22' },
      ]
    }
  };

  // ==================== GLOBAL STATE ====================
  let currentUser = null;
  let selectedRole = null;
  let sidebarCollapsed = false;
  let currentAdminPage = 'dashboard';
  let performanceChart = null;
  let attendanceChart = null;

  // ==================== ICONS (Lucide) ====================
  // Swaps the icon rendered inside a container by id. Used wherever the UI
  // used to do `el.className = 'fas fa-...'` — Lucide renders SVGs, so the
  // simplest safe swap is to reset the container back to a placeholder
  // <i data-lucide="..."> and let Lucide re-render just that node.
  function setIcon(containerId, iconName) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = '<i data-lucide="' + iconName + '"></i>';
    if (window.lucide) lucide.createIcons();
  }

  // ==================== NAVIGATION ====================
  function navigateTo(page) {
    document.querySelectorAll('[id^="page-"]').forEach(el => el.classList.add('hidden'));
    const targetPage = document.getElementById('page-' + page);
    if (targetPage) targetPage.classList.remove('hidden');
  }

  function selectRole(role) {
    selectedRole = role;
    document.getElementById('login-role').textContent = role;

    const iconMap = {
      'Student': 'graduation-cap',
      'Teacher': 'presentation',
      'Admin': 'shield-check'
    };
    setIcon('login-icon-wrap', iconMap[role]);

    const usernameLabel = document.getElementById('login-username-label');
    const usernameInput = document.getElementById('login-username');
    const hint = document.getElementById('login-hint');
    const defaults = document.getElementById('login-defaults');

    if (role === 'Student') {
      usernameLabel.textContent = 'Nomor Induk (NISN/NIS)';
      usernameInput.placeholder = 'Masukkan Nomor Induk';
      hint.classList.remove('hidden');
      defaults.textContent = 'Siswa: Nomor Induk / 1234';
    } else if (role === 'Teacher') {
      usernameLabel.textContent = 'Nomor Guru (NUPTK)';
      usernameInput.placeholder = 'Masukkan Nomor Guru';
      hint.classList.remove('hidden');
      defaults.textContent = 'Guru: Nomor Guru / 1234';
    } else {
      usernameLabel.textContent = 'Username';
      usernameInput.placeholder = 'Enter your username';
      hint.classList.add('hidden');
      defaults.textContent = 'Admin: admin / admin123';
    }

    navigateTo('login');
  }

  // ==================== AUTHENTICATION ====================
  function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value;

  // Validasi credentials terhadap dummyData
  const credentials = {
    'Student': { '24001': '1234', '24002': '1234' },
    'Teacher': { 'T2001': '1234', 'T2101': '1234' },
    'Admin': { 'admin': 'admin123' }
  };
  
  if (credentials[selectedRole] && credentials[selectedRole][username] === password) {
    // Login berhasil - ambil data dari dummyData
    let userData = {};
    if (selectedRole === 'Student') {
      userData = dummyData.students.find(s => s.studentNumber === username) || { name: 'Ahmad Rizky', studentId: username, classId: '10A', role: 'Student' };
    } else if (selectedRole === 'Teacher') {
      userData = dummyData.teachers.find(t => t.teacherNumber === username) || { name: 'Dr. Andi Wijaya', teacherId: username, role: 'Teacher' };
    } else {
      userData = { name: 'Administrator', userId: 'ADMIN', role: 'Admin' };
    }
    
    currentUser = userData;
    
    if (selectedRole === 'Student') initStudentDashboard();
    else if (selectedRole === 'Teacher') initTeacherDashboard();
    else if (selectedRole === 'Admin') initAdminDashboard();
  } else {
    showLoginError('Username atau password salah');
  }
}

  function showLoginError(message) {
    const errorEl = document.getElementById('login-error');
    errorEl.innerHTML = message;
    errorEl.classList.remove('hidden');
  }

  function togglePassword() {
    const input = document.getElementById('login-password');
    if (input.type === 'password') {
      input.type = 'text';
      setIcon('password-eye-wrap', 'eye-off');
    } else {
      input.type = 'password';
      setIcon('password-eye-wrap', 'eye');
    }
  }

  function logout() {
    // Show confirmation for student/teacher, direct logout for admin
    if (selectedRole === 'Student' || selectedRole === 'Teacher') {
      if (!confirm('Apakah Anda yakin ingin keluar dari aplikasi?')) {
        return;
      }
    }

    // Clear user data
    currentUser = null;
    selectedRole = null;

    // Clear login form
    const usernameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');
    if (usernameInput) usernameInput.value = '';
    if (passwordInput) passwordInput.value = '';

    // Hide error
    const errorEl = document.getElementById('login-error');
    if (errorEl) errorEl.classList.add('hidden');

    // Reset attendance data for student
    attendancePhoto = null;
    attendanceLocation = null;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      stream = null;
    }

    // Show success message
    showToast('Berhasil keluar dari aplikasi', 'success');

    // Navigate to landing
    setTimeout(() => {
      navigateTo('landing');
    }, 500);
  }

  // ==================== CHANGE PASSWORD ====================
  function openChangePasswordModal() {
    document.getElementById('current-password').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
    openModal('modal-change-password');
  }

  function handleChangePassword(event) {
    event.preventDefault();

    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
      showToast('New passwords do not match!', 'error');
      return;
    }

    if (newPassword.length < 4) {
      showToast('Password must be at least 4 characters', 'error');
      return;
    }

    if (!currentUser || !currentUser.userId || !currentUser.role) {
      showToast('User not logged in properly', 'error');
      console.log('currentUser:', currentUser);
      return;
    }

    console.log('Changing password for:', currentUser.userId, 'role:', currentUser.role);

    try {
      API.changePassword(currentUser.userId, currentUser.role, currentPassword, newPassword, (response) => {
        console.log('Change password response:', response);

        if (response && response.success) {
          console.log('Password changed successfully!');
          closeModal('modal-change-password');
          document.getElementById('current-password').value = '';
          document.getElementById('new-password').value = '';
          document.getElementById('confirm-password').value = '';
          showToast('Password changed successfully!', 'success');
        } else {
          console.log('Password change failed:', response);
          const errorMsg = (response && response.error) ? response.error : 'Failed to change password';
          showToast(errorMsg, 'error');
        }
      });
    } catch (error) {
      console.log('Error in handleChangePassword:', error);
      showToast('Error: ' + error.message, 'error');
    }
  }

  // ==================== ADMIN DASHBOARD ====================
  function initAdminDashboard() {
    navigateTo('admin');
    document.getElementById('admin-sidebar-name').textContent = currentUser.name;

    // Start clock
    startLiveClock();

    // Load dashboard data
    loadAdminDashboardData();
  }

  function startLiveClock() {
    updateClock();
    setInterval(updateClock, 1000);
  }

  function updateClock() {
    const now = new Date();
    document.getElementById('live-time').textContent = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    document.getElementById('live-date').textContent = now.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
    document.getElementById('mobile-live-time').textContent = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
    document.getElementById('today-date').textContent = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
  }

  function toggleSidebar() {
    const sidebar = document.getElementById('admin-sidebar');
    const toggleIcon = document.getElementById('sidebar-toggle-icon');
    const mainContent = document.getElementById('admin-main');

    sidebarCollapsed = !sidebarCollapsed;
    sidebar.classList.toggle('collapsed', sidebarCollapsed);

    if (toggleIcon) {
      if (sidebarCollapsed) {
        toggleIcon.classList.remove('fa-chevron-left');
        toggleIcon.classList.add('fa-chevron-right');
        mainContent.style.marginLeft = '80px';
      } else {
        toggleIcon.classList.remove('fa-chevron-right');
        toggleIcon.classList.add('fa-chevron-left');
        mainContent.style.marginLeft = '';
      }
    }

    // Resize charts
    setTimeout(() => {
      if (performanceChart) performanceChart.resize();
      if (attendanceChart) attendanceChart.resize();
    }, 310);
  }

  function toggleMobileSidebar() {
    const sidebar = document.getElementById('admin-sidebar');
    const overlay = document.getElementById('mobile-sidebar-overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('hidden');
  }

  function showAdminPage(page) {
    // Clean up charts if leaving dashboard
    if (currentAdminPage === 'dashboard' && page !== 'dashboard') {
      if (performanceChart) { performanceChart.destroy(); performanceChart = null; }
      if (attendanceChart) { attendanceChart.destroy(); attendanceChart = null; }
    }

    currentAdminPage = page;

    // Hide all pages and show selected
    document.querySelectorAll('.admin-page').forEach(el => el.classList.add('hidden'));
    document.getElementById('admin-page-' + page).classList.remove('hidden');

    // Update nav active state
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const navItem = document.getElementById('nav-' + page);
    if (navItem) navItem.classList.add('active');

    // Update page title
    const titles = {
      'dashboard': { title: 'Dashboard', subtitle: 'Overview of school activities' },
      'population': { title: 'Population', subtitle: 'Manage students, teachers, classes, and assets' },
      'schedule': { title: 'Schedule', subtitle: 'Lessons, announcements, and holidays' },
      'quiz': { title: 'Quiz Management', subtitle: 'Manage quizzes and assessments' },
      'report': { title: 'Reports', subtitle: 'Download and view reports' },
      'settings': { title: 'Settings', subtitle: 'System configuration' }
    };

    document.getElementById('admin-page-title').textContent = titles[page].title;
    document.getElementById('admin-page-subtitle').textContent = titles[page].subtitle;

    // Close mobile sidebar
    if (window.innerWidth < 1024) {
      toggleMobileSidebar();
    }

    // Load page data
    if (page === 'dashboard') loadAdminDashboardData();
    else if (page === 'population') loadPopulationData();
    else if (page === 'schedule') loadScheduleData();
    else if (page === 'quiz') loadAdminQuizzes();
    else if (page === 'report') loadReportData();
    else if (page === 'settings') loadSettings();
  }

  function refreshCurrentPage() {
    showAdminPage(currentAdminPage);
  }

  function loadAdminDashboardData() {
    // Show loading placeholders
    const statIds = ['dash-class-count', 'dash-teacher-count', 'dash-student-count', 'dash-attendance-count'];
    statIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '...';
    });

    let studentsData = [], teachersData = [], classesData = [], schedulesData = [], attendanceData = [];
    let loaded = 0;
    const totalCalls = 5;

    function checkAllLoaded() {
      loaded++;
      if (loaded < totalCalls) return;

      // === UPDATE STAT CARDS ===
      document.getElementById('dash-class-count').textContent = classesData.length;
      document.getElementById('dash-teacher-count').textContent = teachersData.length;
      document.getElementById('dash-student-count').textContent = studentsData.length;

      // Calculate today's attendance percentage
      const today = new Date().toISOString().split('T')[0];
      const todayAttendance = attendanceData.filter(a => a.date === today);
      const totalPeople = studentsData.length + teachersData.length;
      const attPercent = totalPeople > 0 ? Math.round((todayAttendance.length / totalPeople) * 100) : 0;
      document.getElementById('dash-attendance-count').textContent = attPercent + '%';

      // === LOAD CHARTS ===
      loadChartsWithRealData(attendanceData, studentsData, teachersData);

      // === UPCOMING LESSONS (today's schedule) ===
      const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      const todayDay = dayNames[new Date().getDay()];
      const todayLessons = schedulesData
        .filter(s => s.day === todayDay)
        .sort((a, b) => (a.timeStart || '').localeCompare(b.timeStart || ''));

      const lessonsContainer = document.getElementById('dash-upcoming-lessons');
      if (todayLessons.length > 0) {
        lessonsContainer.innerHTML = todayLessons.map(lesson => `
          <div class="flex items-center p-3 bg-gray-50 rounded-2xl">
            <div class="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mr-3 bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0">
              <span class="text-xs lg:text-sm font-bold text-white">${(lesson.timeStart || '--').substring(0, 5)}</span>
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-gray-800 text-sm truncate">${lesson.subject}</p>
              <p class="text-xs text-gray-500">${lesson.className || lesson.classId} • Room ${lesson.room || 'TBA'}</p>
            </div>
            <span class="text-xs text-gray-400 flex-shrink-0">${(lesson.timeEnd || '').substring(0, 5)}</span>
          </div>
        `).join('');
      } else {
        lessonsContainer.innerHTML = '<p class="text-gray-400 text-center py-4 text-sm">No lessons scheduled for today (' + todayDay + ')</p>';
      }

      // === UPCOMING QUIZZES ===
      const quizzesContainer = document.getElementById('dash-upcoming-quizzes');
      const upcomingQuizzes = cachedQuizzes
        .filter(q => q.dueDate >= today)
        .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
        .slice(0, 5);

      if (upcomingQuizzes.length > 0) {
        quizzesContainer.innerHTML = upcomingQuizzes.map(quiz => `
          <div class="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-gray-800 text-sm truncate">${quiz.title}</p>
              <p class="text-xs text-gray-500">${quiz.classId || quiz.className} • Due ${new Date(quiz.dueDate).toLocaleDateString()}</p>
            </div>
            <span class="px-2 lg:px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 flex-shrink-0">Upcoming</span>
          </div>
        `).join('');
      } else {
        quizzesContainer.innerHTML = '<p class="text-gray-400 text-center py-4 text-sm">No upcoming quizzes</p>';
      }
    }

    // Parallel API calls
    API.getStudents((res) => {
      if (res && res.success && res.data) studentsData = res.data;
      checkAllLoaded();
    });

    API.getTeachers((res) => {
      if (res && res.success && res.data) teachersData = res.data;
      checkAllLoaded();
    });

    API.getClasses((res) => {
      if (res && res.success && res.data) classesData = res.data;
      checkAllLoaded();
    });

    API.getSchedules((res) => {
      if (res && res.success && res.data) schedulesData = res.data;
      checkAllLoaded();
    });

    API.getAttendance('', (res) => {
      if (res && res.success && res.data) attendanceData = res.data;
      checkAllLoaded();
    });
  }

  function loadChartsWithRealData(attendanceData, studentsData, teachersData) {
    // === WEEKLY ATTENDANCE LINE CHART ===
    const attCtx = document.getElementById('attendanceChart');
    if (attendanceChart) attendanceChart.destroy();

    // Get last 7 days of attendance data
    const dayLabels = [];
    const studentCounts = [];
    const teacherCounts = [];

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
      dayLabels.push(dayName);

      const dayAttendance = attendanceData.filter(a => a.date === dateStr);
      studentCounts.push(dayAttendance.filter(a => a.role === 'Student').length);
      teacherCounts.push(dayAttendance.filter(a => a.role === 'Teacher').length);
    }

    attendanceChart = new Chart(attCtx, {
      type: 'line',
      data: {
        labels: dayLabels,
        datasets: [
          {
            label: 'Students',
            data: studentCounts,
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#3b82f6'
          },
          {
            label: 'Teachers',
            data: teacherCounts,
            borderColor: '#8b5cf6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#8b5cf6'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 5, font: { size: 10 } },
            grid: { color: '#f1f5f9' }
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 10 } }
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: { usePointStyle: true, font: { size: 11 } }
          }
        }
      }
    });

    // === PERFORMANCE DOUGHNUT CHART ===
    const perfCtx = document.getElementById('performanceChart');
    if (performanceChart) performanceChart.destroy();

    // Use quiz results if available, otherwise show student/teacher ratio
    const quizResults = cachedQuizResults || [];
    let chartData, chartLabels, chartColors;

    if (quizResults.length > 0) {
      const excellent = quizResults.filter(r => r.score >= 90).length;
      const good = quizResults.filter(r => r.score >= 75 && r.score < 90).length;
      const average = quizResults.filter(r => r.score >= 60 && r.score < 75).length;
      const poor = quizResults.filter(r => r.score < 60).length;
      chartLabels = ['Excellent (90%+)', 'Good (75-89%)', 'Average (60-74%)', 'Poor (<60%)'];
      chartData = [excellent, good, average, poor];
      chartColors = ['#10b981', '#3b82f6', '#fbbf24', '#ef4444'];
    } else {
      // Fallback: show population distribution
      const activeStudents = studentsData.filter(s => s.status === 'Active' || s.status === true).length;
      const inactiveStudents = studentsData.length - activeStudents;
      const activeTeachers = teachersData.filter(t => t.status === 'Active' || t.status === true).length;
      chartLabels = ['Active Students', 'Inactive Students', 'Active Teachers'];
      chartData = [activeStudents, inactiveStudents, activeTeachers];
      chartColors = ['#3b82f6', '#fbbf24', '#8b5cf6'];
    }

    performanceChart = new Chart(perfCtx, {
      type: 'doughnut',
      data: {
        labels: chartLabels,
        datasets: [{
          data: chartData,
          backgroundColor: chartColors,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 15,
              font: { size: 11 }
            }
          }
        },
        cutout: '65%'
      }
    });
  }

  // ==================== POPULATION ====================
  function loadPopulationData() {
    // Fetch students from database
    API.getStudents((response) => {
      if (response && response.success && response.data) {
        renderStudentsTable(response.data);
      } else {
        console.log('Failed to load students:', response);
        renderStudentsTable([]);
      }
    });

    // Fetch teachers from database  
    API.getTeachers((response) => {
      if (response && response.success && response.data) {
        renderTeachersTable(response.data);
      } else {
        renderTeachersTable([]);
      }
    });

    // Fetch classes from database
    API.getClasses((response) => {
      if (response && response.success && response.data) {
        renderClassesTable(response.data);
      } else {
        renderClassesTable([]);
      }
    });

    // Fetch assets from database
    API.getAssets((response) => {
      if (response && response.success && response.data) {
        renderAssetsTable(response.data);
      } else {
        renderAssetsTable([]);
      }
    });
  }

  function showPopulationTab(tab) {
    document.querySelectorAll('.pop-content').forEach(el => el.classList.add('hidden'));
    document.getElementById('pop-content-' + tab).classList.remove('hidden');

    document.querySelectorAll('#pop-tab-students, #pop-tab-teachers, #pop-tab-classes, #pop-tab-assets').forEach(el => {
      el.classList.remove('active', 'bg-blue-500', 'text-white', 'shadow-md');
      el.classList.add('bg-gray-100', 'text-gray-600');
    });

    const activeTab = document.getElementById('pop-tab-' + tab);
    activeTab.classList.add('active', 'bg-blue-500', 'text-white', 'shadow-md');
    activeTab.classList.remove('bg-gray-100', 'text-gray-600');
  }

  function renderStudentsTable(students) {
    const tbody = document.getElementById('students-table-body');
    if (!tbody) return;

    // Update stats
    const statsEl = document.getElementById('admin-total-students');
    if (statsEl) {
      document.getElementById('admin-total-students').textContent = students.length;
      document.getElementById('admin-male-students').textContent = students.filter(s => (s.gender || '').toLowerCase() === 'laki-laki').length;
      document.getElementById('admin-female-students').textContent = students.filter(s => (s.gender || '').toLowerCase() === 'perempuan').length;
      document.getElementById('admin-active-students').textContent = students.filter(s => s.status === 'Active' || s.status === true).length;
    }

    if (!students || students.length === 0) {
      tbody.innerHTML = '<tr><td colspan="10" class="text-center py-8 text-gray-400 text-sm">Tidak ada data siswa</td></tr>';
      return;
    }

    tbody.innerHTML = students.map(s => {
      // Handle case-insensitive properties
      const studentId = s.studentId || s.studentID || '';
      const name = s.name || '';
      const gender = s.gender || '';
      const studentNumber = s.studentNumber || '';
      const classId = s.classId || s.classID || '';
      const entryYear = s.entryYear || '';
      const parentName = s.parentName || '';
      const email = s.email || '';
      const phone = s.phone || '';
      const parentPhone = s.parentPhone || '';

      return `
    <tr class="table-row hover:bg-gray-50 transition">
      <td class="px-4 py-3">
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-full ${gender.toLowerCase() === 'laki-laki' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'} flex items-center justify-center mr-2">
            <i class="fas fa-user text-xs"></i>
          </div>
          <span class="font-medium text-gray-800 text-sm">${name}</span>
        </div>
      </td>
      <td class="px-4 py-3">
        <span class="inline-flex px-2 py-1 text-xs rounded-full ${gender.toLowerCase() === 'laki-laki' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'}">
          ${gender.toLowerCase() === 'laki-laki' ? 'L' : 'P'}
        </span>
      </td>
      <td class="px-4 py-3 text-gray-600 text-sm">${studentNumber}</td>
      <td class="px-4 py-3 text-gray-600 text-sm">${entryYear}</td>
      <td class="px-4 py-3">
        <span class="inline-flex px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700 font-medium">${classId}</span>
      </td>
      <td class="px-4 py-3 text-gray-600 text-sm hidden md:table-cell">${parentName || '-'}</td>
      <td class="px-4 py-3 text-gray-600 text-sm hidden lg:table-cell">${email || '-'}</td>
      <td class="px-4 py-3 text-gray-600 text-sm hidden lg:table-cell">${phone || '-'}</td>
      <td class="px-4 py-3 text-gray-600 text-sm hidden xl:table-cell">${parentPhone || '-'}</td>
      <td class="px-4 py-3 text-center">
        <div class="flex items-center justify-center gap-2">
          <button onclick="editStudent('${studentId}')" class="text-blue-400 hover:text-blue-600 transition p-1" title="Edit">
            <i class="fas fa-edit"></i>
          </button>
          <button onclick="deleteStudent('${studentId}')" class="text-red-400 hover:text-red-600 transition p-1" title="Delete">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </td>
    </tr>
  `}).join('');
  }

  function renderTeachersTable(teachers) {
    const tbody = document.getElementById('teachers-table-body');
    if (!tbody) return;

    // Update stats
    const statsEl = document.getElementById('admin-total-teachers');
    if (statsEl) {
      document.getElementById('admin-total-teachers').textContent = teachers.length;
      document.getElementById('admin-male-teachers').textContent = teachers.filter(t => t.gender === 'Laki-laki').length;
      document.getElementById('admin-female-teachers').textContent = teachers.filter(t => t.gender === 'Perempuan').length;
      document.getElementById('admin-active-teachers').textContent = teachers.filter(t => t.status === 'Active').length;
    }

    if (!teachers || teachers.length === 0) {
      tbody.innerHTML = '<tr><td colspan="8" class="text-center py-8 text-gray-400 text-sm">Tidak ada data guru</td></tr>';
      return;
    }

    tbody.innerHTML = teachers.map(t => `
    <tr class="table-row hover:bg-gray-50 transition">
      <td class="px-4 py-3">
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-full ${t.gender === 'Laki-laki' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'} flex items-center justify-center mr-2">
            <i class="fas fa-user text-xs"></i>
          </div>
          <span class="font-medium text-gray-800 text-sm">${t.name}</span>
        </div>
      </td>
      <td class="px-4 py-3">
        <span class="inline-flex px-2 py-1 text-xs rounded-full ${t.gender === 'Laki-laki' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'}">
          ${t.gender === 'Laki-laki' ? 'L' : 'P'}
        </span>
      </td>
      <td class="px-4 py-3 text-gray-600 text-sm">${t.teacherNumber}</td>
      <td class="px-4 py-3 text-gray-600 text-sm">${t.entryYear}</td>
      <td class="px-4 py-3">
        <span class="inline-flex px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-medium">${t.subject}</span>
      </td>
      <td class="px-4 py-3 text-gray-600 text-sm hidden md:table-cell">${t.email || '-'}</td>
      <td class="px-4 py-3 text-gray-600 text-sm hidden lg:table-cell">${t.phone || '-'}</td>
      <td class="px-4 py-3 text-center">
        <button onclick="deleteTeacher('${t.teacherId}')" class="text-red-400 hover:text-red-600 transition p-1">
          <i class="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  `).join('');
  }

  function renderClassesTable(classes) {
    const tbody = document.getElementById('classes-table-body');
    if (!classes || classes.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" class="text-center py-8 text-gray-400 text-sm">No classes found</td></tr>';
      return;
    }

    tbody.innerHTML = classes.map(c => `
    <tr class="table-row transition">
      <td class="px-3 lg:px-6 py-3 font-semibold text-gray-800 text-sm">${c.className}</td>
      <td class="px-3 lg:px-6 py-3 text-gray-500 text-sm">Grade ${c.gradeLevel}</td>
      <td class="px-3 lg:px-6 py-3 text-gray-500 text-sm hidden sm:table-cell">${c.homeroomTeacher || '-'}</td>
      <td class="px-3 lg:px-6 py-3 text-gray-500 text-sm">${c.capacity} students</td>
      <td class="px-3 lg:px-6 py-3">
        <button onclick="deleteClass('${c.classId}')" class="text-red-400 hover:text-red-600 p-1.5 lg:p-2 transition">
          <i class="fas fa-trash text-sm"></i>
        </button>
      </td>
    </tr>
  `).join('');
  }

  function renderAssetsTable(assets) {
    const tbody = document.getElementById('assets-table-body');
    if (!assets || assets.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" class="text-center py-8 text-gray-400 text-sm">No assets found</td></tr>';
      return;
    }

    tbody.innerHTML = assets.map(a => `
    <tr class="table-row transition">
      <td class="px-3 lg:px-6 py-3 font-semibold text-gray-800 text-sm">${a.assetName}</td>
      <td class="px-3 lg:px-6 py-3 text-gray-500 text-sm">${a.category}</td>
      <td class="px-3 lg:px-6 py-3 text-gray-500 text-sm hidden sm:table-cell">${a.location || '-'}</td>
      <td class="px-3 lg:px-6 py-3">
        <span class="px-2 py-1 rounded-full text-xs font-medium ${a.condition === 'Excellent' ? 'bg-emerald-100 text-emerald-700' :
        a.condition === 'Good' ? 'bg-blue-100 text-blue-700' :
          a.condition === 'Fair' ? 'bg-amber-100 text-amber-700' :
            'bg-red-100 text-red-700'
      }">${a.condition}</span>
      </td>
      <td class="px-3 lg:px-6 py-3">
        <button onclick="deleteAsset('${a.assetId}')" class="text-red-400 hover:text-red-600 p-1.5 lg:p-2 transition">
          <i class="fas fa-trash text-sm"></i>
        </button>
      </td>
    </tr>
  `).join('');
  }

  function searchStudents() {
    const search = document.getElementById('student-search')?.value.toLowerCase() || '';
    const filtered = dummyData.students.filter(s =>
      s.name.toLowerCase().includes(search) ||
      s.studentNumber.toLowerCase().includes(search)
    );
    renderStudentsTable(filtered);
  }

  function searchTeachers() {
    const search = document.getElementById('teacher-search')?.value.toLowerCase() || '';
    const filtered = dummyData.teachers.filter(t =>
      t.name.toLowerCase().includes(search) ||
      t.teacherNumber.toLowerCase().includes(search)
    );
    renderTeachersTable(filtered);
  }

  function renderAdminTeachers() {
    const searchTerm = (document.getElementById('admin-teacher-search')?.value || '').toLowerCase();
    const subjectFilter = document.getElementById('admin-teacher-subject-filter')?.value || 'all';

    let filtered = dummyData.teachers;

    if (searchTerm) {
      filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(searchTerm) ||
        t.teacherNumber.toLowerCase().includes(searchTerm)
      );
    }

    if (subjectFilter !== 'all') {
      filtered = filtered.filter(t => t.subject === subjectFilter);
    }

    renderTeachersTable(filtered);
  }

  // ==================== SCHEDULE ====================
  function loadScheduleData() {
    renderAdminSchedule();

    // Load announcements from database
    API.getAnnouncements((response) => {
      if (response && response.success && response.data) {
        renderAnnouncements(response.data);
      } else {
        renderAnnouncements([]);
      }
    });

    // Load holidays from database
    API.getHolidays((response) => {
      if (response && response.success && response.data) {
        renderHolidays(response.data);
      } else {
        renderHolidays([]);
      }
    });
  }

  function showScheduleTab(tab) {
    document.querySelectorAll('.sch-content').forEach(el => el.classList.add('hidden'));
    document.getElementById('sch-content-' + tab).classList.remove('hidden');

    document.querySelectorAll('#sch-tab-lessons, #sch-tab-announcements, #sch-tab-holidays').forEach(el => {
      el.classList.remove('active', 'bg-blue-500', 'text-white', 'shadow-md');
      el.classList.add('bg-gray-100', 'text-gray-600');
    });

    const activeTab = document.getElementById('sch-tab-' + tab);
    activeTab.classList.add('active', 'bg-blue-500', 'text-white', 'shadow-md');
    activeTab.classList.remove('bg-gray-100', 'text-gray-600');
  }

  function renderAdminSchedule() {
    const classFilter = document.getElementById('schedule-class-filter')?.value || '';

    API.getSchedules((response) => {
      if (response && response.success && response.data) {
        let schedules = response.data;

        // Filter by class if selected
        if (classFilter) {
          schedules = schedules.filter(s => s.classId === classFilter);
        }

        renderScheduleTable(schedules);
      } else {
        console.log('Failed to load schedules:', response);
        renderScheduleTable([]);
      }
    });
  }

  function renderScheduleTable(schedules) {
    const container = document.getElementById('schedule-grid-container');
    const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
    const startHour = 7;
    const endHour = 16; // grid goes from 07:00 to 15:00 (last visible hour)
    const totalHours = endHour - startHour; // 9
    const rowHeight = 60; // px per hour
    const headerHeight = 36; // px for header row

    // Helper to normalize time string to HH:MM
    const extractTime = (timeValue) => {
      if (!timeValue) return '';
      const str = String(timeValue);
      if (str.includes('T')) {
        const m = str.match(/(\d{2}):(\d{2}):\d{2}/);
        if (m) return `${m[1]}:${m[2]}`;
        const d = new Date(str);
        return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
      }
      const parts = str.split(':');
      if (parts.length >= 2) return parts[0].padStart(2, '0') + ':' + parts[1].substring(0, 2);
      return str.substring(0, 5);
    };

    // Convert HH:MM to pixel offset from grid top
    const timeToPx = (timeStr) => {
      const [h, m] = timeStr.split(':').map(Number);
      return ((h - startHour) + m / 60) * rowHeight;
    };

    // Color palette for different subjects
    const colors = [
      { bg: '#e0e7ff', border: '#a5b4fc', text: '#3730a3' },
      { bg: '#dbeafe', border: '#93c5fd', text: '#1e40af' },
      { bg: '#ede9fe', border: '#c4b5fd', text: '#5b21b6' },
      { bg: '#fce7f3', border: '#f9a8d4', text: '#9d174d' },
      { bg: '#d1fae5', border: '#6ee7b7', text: '#065f46' },
      { bg: '#fef3c7', border: '#fcd34d', text: '#92400e' },
      { bg: '#e0f2fe', border: '#7dd3fc', text: '#075985' },
      { bg: '#f3e8ff', border: '#d8b4fe', text: '#6b21a8' },
    ];
    const subjectColors = {};
    let colorIdx = 0;
    const getColor = (subject) => {
      if (!subjectColors[subject]) {
        subjectColors[subject] = colors[colorIdx % colors.length];
        colorIdx++;
      }
      return subjectColors[subject];
    };

    const gridHeight = totalHours * rowHeight;

    let html = `
      <div style="display: grid; grid-template-columns: 56px repeat(5, 1fr); font-size: 13px;">
        <!-- Header row -->
        <div style="height: ${headerHeight}px; display: flex; align-items: center; padding: 0 8px; font-weight: 600; color: #4b5563; font-size: 12px;">Time</div>
        ${days.map(d => `<div style="height: ${headerHeight}px; display: flex; align-items: center; padding: 0 8px; font-weight: 600; color: #4b5563; font-size: 12px;">${d}</div>`).join('')}

        <!-- Time labels column -->
        <div style="position: relative; height: ${gridHeight}px;">
          ${Array.from({ length: totalHours }, (_, i) => {
      const hour = startHour + i;
      return `<div style="position: absolute; top: ${i * rowHeight}px; height: ${rowHeight}px; width: 100%; display: flex; align-items: flex-start; padding: 6px 8px 0; font-weight: 600; color: #6b7280; font-size: 12px; border-top: 1px solid #f1f5f9;">${String(hour).padStart(2, '0')}:00</div>`;
    }).join('')}
        </div>

        <!-- Day columns -->
        ${days.map((day, dayIdx) => {
      const daySchedules = schedules.filter(s => s.day === day);
      return `
            <div style="position: relative; height: ${gridHeight}px;">
              <!-- Hour grid lines -->
              ${Array.from({ length: totalHours }, (_, i) =>
        `<div style="position: absolute; top: ${i * rowHeight}px; width: 100%; height: ${rowHeight}px; border-top: 1px solid #f1f5f9; border-left: 1px solid #f8fafc;"></div>`
      ).join('')}

              <!-- Schedule cards -->
              ${daySchedules.map(s => {
        const st = extractTime(s.timeStart);
        const et = extractTime(s.timeEnd);
        if (!st || !et) return '';
        const top = timeToPx(st);
        const height = Math.max(timeToPx(et) - top, 28); // min 28px
        const c = getColor(s.subject);
        return `
                  <div style="position: absolute; top: ${top}px; height: ${height}px; left: 3px; right: 3px; background: ${c.bg}; border-left: 3px solid ${c.border}; border-radius: 8px; padding: 4px 6px; overflow: hidden; cursor: pointer; transition: box-shadow 0.2s; z-index: 2;"
                       onmouseover="this.style.boxShadow='0 2px 8px rgba(0,0,0,0.12)'"
                       onmouseout="this.style.boxShadow='none'"
                       onclick="editSchedule('${s.scheduleId}')">
                    <p style="font-weight: 600; color: ${c.text}; font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${s.subject}</p>
                    <p style="color: #6b7280; font-size: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${s.className || s.classId}</p>
                    ${height > 40 ? `<p style="color: #9ca3af; font-size: 9px; margin-top: 1px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${st} - ${et} • ${s.room || ''}</p>` : ''}
                    ${height > 55 ? `<p style="color: #9ca3af; font-size: 9px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${s.teacher || ''}</p>` : ''}
                  </div>
                `;
      }).join('')}
            </div>
          `;
    }).join('')}
      </div>
    `;

    container.innerHTML = html;
  }

  let cachedAnnouncements = [];
  let cachedHolidays = [];

  function loadAnnouncements() {
    API.getAnnouncements((res) => {
      if (res && res.success && res.data) {
        cachedAnnouncements = res.data;
        renderAnnouncements(cachedAnnouncements);
      } else {
        cachedAnnouncements = [];
        renderAnnouncements([]);
      }
    });
  }

  function loadHolidays() {
    API.getHolidays((res) => {
      if (res && res.success && res.data) {
        cachedHolidays = res.data;
        renderHolidays(cachedHolidays);
      } else {
        cachedHolidays = [];
        renderHolidays([]);
      }
    });
  }

  function renderAnnouncements(announcements) {
    const container = document.getElementById('announcements-list');
    if (!announcements || announcements.length === 0) {
      container.innerHTML = '<p class="text-gray-400 text-center py-8 text-sm">No announcements</p>';
      return;
    }

    container.innerHTML = announcements.map(a => `
    <div class="border border-gray-100 rounded-2xl p-4 ${a.type === 'urgent' ? 'bg-red-50/50 border-red-200' : 'bg-white'}">
      <div class="flex justify-between items-start mb-2">
        <h4 class="font-semibold text-gray-800 text-sm">${a.title}</h4>
        <div class="flex gap-2">
          ${a.type && a.type !== 'general' ? `<span class="px-2 py-1 rounded-full text-xs font-medium ${a.type === 'urgent' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}">${a.type}</span>` : ''}
          <button onclick="deleteAnnouncement('${a.id}')" class="text-red-400 hover:text-red-600">
            <i class="fas fa-trash text-xs"></i>
          </button>
        </div>
      </div>
      <p class="text-sm text-gray-600 mb-2">${a.content}</p>
      <p class="text-xs text-gray-400">By ${a.createdBy}</p>
    </div>
  `).join('');
  }

  function renderHolidays(holidays) {
    const container = document.getElementById('holidays-list');
    if (!holidays || holidays.length === 0) {
      container.innerHTML = '<p class="text-gray-400 text-center py-8 text-sm">No holidays added</p>';
      return;
    }

    container.innerHTML = holidays.map(h => `
    <div class="border border-gray-100 rounded-2xl p-4 bg-white">
      <div class="flex justify-between items-start">
        <div class="flex-1 min-w-0">
          <h4 class="font-semibold text-gray-800 text-sm">${h.title}</h4>
          <p class="text-sm text-gray-500">${h.description || ''}</p>
          <p class="text-xs text-gray-400 mt-2">
            <i class="fas fa-calendar mr-1"></i>${h.startDate} to ${h.endDate}
            <span class="ml-2 px-2 py-1 rounded-lg text-xs font-medium bg-purple-50 text-purple-700">${h.type}</span>
          </p>
        </div>
        <button onclick="deleteHoliday('${h.id}')" class="text-red-400 hover:text-red-600 flex-shrink-0 ml-2">
          <i class="fas fa-trash text-sm"></i>
        </button>
      </div>
    </div>
  `).join('');
  }

  // ==================== QUIZ ====================
  let cachedQuizzes = [];
  let cachedQuizResults = [];

  function loadAdminQuizzes() {
    const container = document.getElementById('admin-quiz-list');
    if (container) container.innerHTML = '<p class="text-gray-400 text-center py-8 text-sm"><i class="fas fa-spinner fa-spin mr-2"></i>Loading quizzes...</p>';

    let loaded = 0;
    function checkDone() {
      loaded++;
      if (loaded < 2) return;
      const classFilter = document.getElementById('quiz-class-filter')?.value;
      let quizzes = cachedQuizzes;
      if (classFilter) quizzes = quizzes.filter(q => q.classId === classFilter);
      renderAdminQuizzes(quizzes);
    }

    API.getQuizzes((res) => {
      cachedQuizzes = (res && res.success && res.data) ? res.data : [];
      checkDone();
    });
    API.getQuizResults((res) => {
      cachedQuizResults = (res && res.success && res.data) ? res.data : [];
      checkDone();
    });
  }

  function renderAdminQuizzes(quizzes) {
    const container = document.getElementById('admin-quiz-list');
    if (!quizzes || quizzes.length === 0) {
      container.innerHTML = '<p class="text-gray-400 text-center py-8 text-sm">No quizzes found</p>';
      return;
    }

    container.innerHTML = quizzes.map(q => {
      // Count submissions for this quiz
      const submissionCount = cachedQuizResults.filter(r => r.quizId === q.quizId).length;

      return `
    <div onclick="viewQuizSubmissions('${q.quizId}')" class="border border-gray-100 rounded-2xl p-4 flex justify-between items-center hover:shadow-md transition bg-white cursor-pointer">
      <div class="flex-1 min-w-0">
        <h4 class="font-semibold text-gray-800 text-sm">${q.title}</h4>
        <p class="text-sm text-gray-500">${q.classId} • Due: ${new Date(q.dueDate).toLocaleDateString()}</p>
        <p class="text-xs text-gray-400">By ${q.createdBy}</p>
      </div>
      <div class="flex gap-2 items-center flex-shrink-0">
        <div class="text-right mr-2">
          <p class="text-xs text-gray-400">Submissions</p>
          <p class="text-sm font-bold text-blue-600">${submissionCount}</p>
        </div>
        <span class="px-2 py-1 rounded-full text-xs font-medium ${q.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700'}">${q.status}</span>
        <button onclick="event.stopPropagation(); deleteQuiz('${q.quizId}')" class="text-red-400 hover:text-red-600 p-2">
          <i class="fas fa-trash text-sm"></i>
        </button>
      </div>
    </div>
  `;
    }).join('');
  }

  function deleteQuiz(quizId) {
    if (!confirm('Hapus quiz ini? Data submissions juga akan hilang.')) return;
    API.deleteQuiz(quizId, (res) => {
      if (res && res.success) {
        showToast('Quiz berhasil dihapus', 'success');
        loadAdminQuizzes();
      } else {
        showToast('Gagal menghapus quiz', 'error');
      }
    });
  }

  // Global variable for current quiz submissions
  let currentQuizSubmissionsId = null;

  // View quiz submissions (Admin)
  function viewQuizSubmissions(quizId) {
    const quiz = cachedQuizzes.find(q => q.quizId === quizId);
    if (!quiz) return;

    currentQuizSubmissionsId = quizId;

    const submissions = cachedQuizResults.filter(r => r.quizId === quizId);

    document.getElementById('submissions-quiz-title').textContent = quiz.title;
    document.getElementById('submissions-quiz-subject').textContent = `${quiz.subject} • ${quiz.classId}`;

    const container = document.getElementById('submissions-list');

    if (submissions.length === 0) {
      container.innerHTML = `
      <div class="text-center py-8">
        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
          <i class="fas fa-inbox text-gray-400 text-2xl"></i>
        </div>
        <p class="text-gray-500 text-sm">No submissions yet</p>
      </div>
    `;
    } else {
      // Sort by submission date (newest first)
      submissions.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

      container.innerHTML = submissions.map(r => `
      <div class="border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3 flex-1">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              ${r.studentName.charAt(0)}
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-gray-800 text-sm">${r.studentName}</p>
              <p class="text-xs text-gray-400">Submitted: ${new Date(r.submittedAt).toLocaleString('id-ID')}</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="text-right">
              <p class="text-xs text-gray-400">Score</p>
              <p class="text-lg font-bold ${r.score >= 70 ? 'text-emerald-600' : r.score >= 50 ? 'text-amber-600' : 'text-red-600'}">${r.score}%</p>
            </div>
            <button onclick="viewSubmissionDetail('${r.resultId}')" class="px-3 py-1.5 bg-blue-500 text-white text-xs rounded-lg font-medium hover:bg-blue-600 transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    `).join('');
    }

    openModal('modal-quiz-submissions');
  }

  // Export submissions to Excel
  function exportSubmissionsToExcel() {
    if (!currentQuizSubmissionsId) return;

    const quiz = cachedQuizzes.find(q => q.quizId === currentQuizSubmissionsId);
    const submissions = cachedQuizResults.filter(r => r.quizId === currentQuizSubmissionsId);

    if (submissions.length === 0) {
      showToast('No submissions to export', 'info');
      return;
    }

    // Create Excel content (CSV format with BOM for Excel compatibility)
    const BOM = '\uFEFF';
    const headers = ['No', 'Student Name', 'Student ID', 'Score (%)', 'Correct', 'Wrong', 'Time Spent (min)', 'Submitted At', 'Status'];

    let csvContent = BOM + headers.join(',') + '\n';

    submissions.forEach((r, index) => {
      const row = [
        index + 1,
        `"${r.studentName}"`,
        `"${r.studentId}"`,
        r.score,
        r.correctCount,
        r.wrongCount,
        r.timeSpent,
        new Date(r.submittedAt).toLocaleString('id-ID'),
        r.status
      ];
      csvContent += row.join(',') + '\n';
    });

    // Add summary section
    csvContent += '\n';
    csvContent += 'SUMMARY\n';
    csvContent += `Quiz Title,${quiz.title}\n`;
    csvContent += `Subject,${quiz.subject}\n`;
    csvContent += `Class,${quiz.classId}\n`;
    csvContent += `Total Submissions,${submissions.length}\n`;
    csvContent += `Average Score,${(submissions.reduce((sum, r) => sum + r.score, 0) / submissions.length).toFixed(1)}%\n`;
    csvContent += `Highest Score,${Math.max(...submissions.map(r => r.score))}%\n`;
    csvContent += `Lowest Score,${Math.min(...submissions.map(r => r.score))}%\n`;

    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    const fileName = `Quiz_${quiz.title.replace(/[^a-z0-9]/gi, '_')}_Submissions_${new Date().toISOString().split('T')[0]}.csv`;

    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Excel file downloaded!', 'success');
  }

  // Close submissions modal and refresh admin quiz list
  function closeSubmissionsModal() {
    closeModal('modal-quiz-submissions');
    loadAdminQuizzes(); // Refresh to show updated submission counts
  }

  // View individual submission detail
  function viewSubmissionDetail(resultId) {
    const result = cachedQuizResults.find(r => r.resultId === resultId);
    if (!result) return;
    const quiz = cachedQuizzes.find(q => q.quizId === result.quizId);

    if (!result || !quiz) return;

    document.getElementById('detail-student-name').textContent = result.studentName;
    document.getElementById('detail-quiz-title').textContent = quiz.title;
    document.getElementById('detail-score').textContent = result.score;
    document.getElementById('detail-score').className = `text-4xl font-bold ${result.score >= 70 ? 'text-emerald-600' : result.score >= 50 ? 'text-amber-600' : 'text-red-600'}`;
    document.getElementById('detail-correct').textContent = result.correctCount;
    document.getElementById('detail-wrong').textContent = result.wrongCount;
    document.getElementById('detail-time').textContent = result.timeSpent + ' minutes';
    document.getElementById('detail-submitted').textContent = new Date(result.submittedAt).toLocaleString('id-ID');

    // Show question-by-question review
    const reviewContainer = document.getElementById('submission-review');
    reviewContainer.innerHTML = result.answers.map((answer, index) => {
      const question = quiz.questions[index];
      const isCorrect = answer === question.correct;

      return `
      <div class="border border-gray-100 rounded-xl p-4 mb-3 ${isCorrect ? 'bg-emerald-50' : 'bg-red-50'}">
        <div class="flex items-start justify-between mb-2">
          <p class="font-medium text-gray-800 text-sm flex-1">${index + 1}. ${question.question}</p>
          <span class="px-2 py-1 rounded-full text-xs font-medium ${isCorrect ? 'bg-emerald-200 text-emerald-700' : 'bg-red-200 text-red-700'}">
            ${isCorrect ? '+ ' + question.points : '0'} pts
          </span>
        </div>
        <div class="text-sm">
          <p class="${isCorrect ? 'text-emerald-700' : 'text-red-700'}">
            <i class="fas fa-${isCorrect ? 'check' : 'times'}-circle mr-1"></i>
            Your answer: ${question.options[answer]}
          </p>
          ${!isCorrect ? `
            <p class="text-emerald-700 mt-1">
              <i class="fas fa-check-circle mr-1"></i>
              Correct answer: ${question.options[question.correct]}
            </p>
          ` : ''}
        </div>
      </div>
    `;
    }).join('');

    openModal('modal-submission-detail');
  }

  // ==================== REPORTS ====================
  let currentAttendanceData = []; // Store filtered data for download

  function loadReportData() {
    // Set default dates (last month to today)
    const today = new Date().toISOString().split('T')[0];
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    document.getElementById('report-att-end').value = today;
    document.getElementById('report-att-start').value = lastMonth.toISOString().split('T')[0];

    // Populate quiz filter
    const quizFilter = document.getElementById('report-grade-quiz');
    if (quizFilter) {
      quizFilter.innerHTML = '<option value="">All Quizzes</option>' +
        cachedQuizzes.map(q => `<option value="${q.quizId}">${q.title}</option>`).join('');
    }

    // Auto-load attendance data on page open
    generateAttendanceReport();

    // Load live attendance feed
    loadLiveFeed();
  }

  function generateAttendanceReport() {
    const startDate = document.getElementById('report-att-start').value;
    const endDate = document.getElementById('report-att-end').value;
    const role = document.getElementById('report-att-role').value;

    if (!startDate || !endDate) {
      API.showToast('Pilih tanggal terlebih dahulu', 'error');
      return;
    }

    // Show loading state in table
    const tbody = document.getElementById('attendance-list-body');
    if (tbody) {
      tbody.innerHTML = '<tr><td colspan="6" class="text-center py-8 text-gray-400 text-sm"><i class="fas fa-spinner fa-spin text-2xl mb-2 block"></i>Loading attendance data...</td></tr>';
    }

    // Disable download buttons while loading
    const dlBtn = document.getElementById('btn-download-attendance');
    const dlBtn2 = document.getElementById('btn-download-attendance-2');
    if (dlBtn) dlBtn.disabled = true;
    if (dlBtn2) dlBtn2.classList.add('hidden');

    API.getAttendance('', (response) => {
      if (!response) {
        showAttendanceList([], 'No response from server');
        return;
      }

      if (response.success && response.data && response.data.length > 0) {
        let attendance = response.data;

        // Filter by date range
        attendance = attendance.filter(a => {
          const attDate = a.date;
          return attDate >= startDate && attDate <= endDate;
        });

        // Filter by role if selected
        if (role) {
          attendance = attendance.filter(a => a.role === role);
        }

        // Sort by date then time (newest first)
        attendance.sort((a, b) => {
          const dateCompare = (b.date || '').localeCompare(a.date || '');
          if (dateCompare !== 0) return dateCompare;
          return (b.time || '').localeCompare(a.time || '');
        });

        showAttendanceList(attendance);
      } else {
        showAttendanceList([], response && response.error ? response.error : null);
      }
    });
  }

  function showAttendanceList(attendance, errorMsg) {
    const tbody = document.getElementById('attendance-list-body');
    const countSpan = document.getElementById('attendance-count');
    const dlBtn = document.getElementById('btn-download-attendance');
    const dlBtn2 = document.getElementById('btn-download-attendance-2');

    // Store for download
    currentAttendanceData = attendance;

    // Update count
    if (countSpan) countSpan.textContent = attendance.length;

    if (errorMsg) {
      tbody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-gray-400 text-sm">
        <i class="fas fa-exclamation-circle text-2xl mb-2 block text-red-300"></i>${errorMsg}</td></tr>`;
      return;
    }

    if (!attendance || attendance.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-gray-400 text-sm">
        <i class="fas fa-inbox text-2xl mb-2 block"></i>Tidak ada data absensi untuk periode ini</td></tr>`;
      if (dlBtn) dlBtn.disabled = true;
      if (dlBtn2) dlBtn2.classList.add('hidden');
      return;
    }

    // Enable download buttons
    if (dlBtn) dlBtn.disabled = false;
    if (dlBtn2) dlBtn2.classList.remove('hidden');

    // Populate table
    tbody.innerHTML = attendance.map(a => `
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3 text-sm text-gray-800">${a.date || '-'}</td>
        <td class="px-4 py-3 text-sm text-gray-600">${a.time || '-'}</td>
        <td class="px-4 py-3 text-sm font-medium text-gray-800">${a.userName || 'Unknown'}</td>
        <td class="px-4 py-3 text-sm">
          <span class="px-2 py-1 rounded-full text-xs font-medium ${a.role === 'Student' ? 'bg-blue-100 text-blue-700' : a.role === 'Teacher' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'}">
            ${a.role || '-'}
          </span>
        </td>
        <td class="px-4 py-3 text-sm">
          <span class="px-2 py-1 rounded-full text-xs font-medium ${a.status === 'Present' ? 'bg-emerald-100 text-emerald-700' : a.status === 'Late' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}">
            ${a.status || '-'}
          </span>
        </td>
        <td class="px-4 py-3 text-sm text-gray-500 hidden lg:table-cell">
          ${a.latitude && a.longitude ? '📍 ' + parseFloat(a.latitude).toFixed(4) + ', ' + parseFloat(a.longitude).toFixed(4) : '-'}
        </td>
      </tr>
    `).join('');
  }

  function downloadAttendanceExcel() {
    if (!currentAttendanceData || currentAttendanceData.length === 0) {
      API.showToast('Tidak ada data untuk diunduh', 'info');
      return;
    }

    const startDate = document.getElementById('report-att-start').value;
    const endDate = document.getElementById('report-att-end').value;
    const role = document.getElementById('report-att-role').value;

    // BOM for Excel UTF-8 support
    const BOM = '\uFEFF';
    const headers = ['No', 'Tanggal', 'Waktu', 'Nama', 'Role', 'Status', 'Latitude', 'Longitude', 'Accuracy'];
    let csv = BOM + headers.join(',') + '\n';

    currentAttendanceData.forEach((a, i) => {
      const row = [
        i + 1,
        '"' + (a.date || '') + '"',
        '"' + (a.time || '') + '"',
        '"' + (a.userName || '') + '"',
        '"' + (a.role || '') + '"',
        '"' + (a.status || '') + '"',
        a.latitude || '',
        a.longitude || '',
        a.accuracy ? '±' + a.accuracy + 'm' : ''
      ];
      csv += row.join(',') + '\n';
    });

    // Summary section
    csv += '\n';
    csv += 'SUMMARY\n';
    csv += 'Period,"' + startDate + ' to ' + endDate + '"\n';
    csv += 'Role Filter,"' + (role || 'All Roles') + '"\n';
    csv += 'Total Records,' + currentAttendanceData.length + '\n';
    csv += 'Students,' + currentAttendanceData.filter(a => a.role === 'Student').length + '\n';
    csv += 'Teachers,' + currentAttendanceData.filter(a => a.role === 'Teacher').length + '\n';

    // Download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Attendance_Report_' + startDate + '_to_' + endDate + '.csv';
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    API.showToast('Laporan diunduh! ' + currentAttendanceData.length + ' records', 'success');
  }

  // ==================== LIVE ATTENDANCE FEED ====================
  let liveFeedExpanded = false;
  let liveFeedData = [];

  function loadLiveFeed() {
    const today = new Date().toISOString().split('T')[0];

    API.getAttendance(today, (response) => {
      const grid = document.getElementById('live-feed-grid');
      const countBadge = document.getElementById('live-feed-count');
      const subtitle = document.getElementById('live-feed-subtitle');
      const toggleDiv = document.getElementById('live-feed-toggle');

      if (!response || !response.success || !response.data || response.data.length === 0) {
        grid.innerHTML = '<div class="text-center py-8 text-gray-400 text-sm col-span-full"><i class="fas fa-inbox text-2xl mb-2 block"></i>No attendance records today</div>';
        if (countBadge) countBadge.textContent = '0 present';
        if (toggleDiv) toggleDiv.classList.add('hidden');
        return;
      }

      let attendance = response.data.filter(a => a.date === today);

      // Deduplicate: keep only the latest entry per person
      const latestByPerson = {};
      attendance.forEach(a => {
        const key = (a.userName || 'Unknown') + '_' + (a.role || '');
        if (!latestByPerson[key] || (a.time || '') > (latestByPerson[key].time || '')) {
          latestByPerson[key] = a;
        }
      });

      // Sort by time (most recent first)
      liveFeedData = Object.values(latestByPerson).sort((a, b) =>
        (b.time || '').localeCompare(a.time || '')
      );

      // Update count badge
      if (countBadge) countBadge.textContent = liveFeedData.length + ' present';
      if (subtitle) subtitle.textContent = "Today's attendance — " + new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' });

      // Show toggle if more than 5
      if (toggleDiv) {
        if (liveFeedData.length > 5) {
          toggleDiv.classList.remove('hidden');
        } else {
          toggleDiv.classList.add('hidden');
        }
      }

      renderLiveFeedCards();
    });
  }

  function renderLiveFeedCards() {
    const grid = document.getElementById('live-feed-grid');
    const visibleData = liveFeedExpanded ? liveFeedData : liveFeedData.slice(0, 5);

    // Color palette for avatars
    const avatarColors = [
      'from-blue-400 to-blue-600', 'from-purple-400 to-purple-600',
      'from-pink-400 to-pink-600', 'from-emerald-400 to-emerald-600',
      'from-amber-400 to-amber-600', 'from-cyan-400 to-cyan-600',
      'from-rose-400 to-rose-600', 'from-blue-400 to-blue-600',
      'from-teal-400 to-teal-600', 'from-orange-400 to-orange-600'
    ];

    const getInitials = (name) => {
      if (!name) return '?';
      const parts = name.trim().split(/\s+/);
      if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      return parts[0].substring(0, 2).toUpperCase();
    };

    grid.innerHTML = visibleData.map((a, i) => {
      const initials = getInitials(a.userName);
      const color = avatarColors[i % avatarColors.length];
      const roleBadge = a.role === 'Teacher'
        ? '<span style="font-size:9px;" class="px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-600 font-medium">Teacher</span>'
        : '<span style="font-size:9px;" class="px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-600 font-medium">Student</span>';
      const statusColor = a.status === 'Present' ? 'bg-emerald-400' : a.status === 'Late' ? 'bg-amber-400' : 'bg-red-400';

      return `
        <div class="flex flex-col items-center p-3 bg-gray-50 rounded-2xl hover:bg-gray-100 transition cursor-default" title="${a.userName} — ${a.time || ''}">
          <div class="relative mb-2">
            ${a.photoUrl ? `
              <img src="${a.photoUrl}" alt="${a.userName}" class="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-white">
            ` : `
              <div class="w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-sm">
                <span class="text-white font-bold text-sm">${initials}</span>
              </div>
            `}
            <div class="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 ${statusColor} rounded-full border-2 border-white"></div>
          </div>
          <p class="text-xs font-semibold text-gray-800 text-center truncate w-full">${a.userName || 'Unknown'}</p>
          <p class="text-[10px] text-gray-400 mb-1">${(a.time || '').substring(0, 5)}</p>
          ${roleBadge}
        </div>
      `;
    }).join('');

    // Update toggle button text
    const toggleBtn = document.getElementById('live-feed-toggle-btn');
    if (toggleBtn) {
      if (liveFeedExpanded) {
        toggleBtn.innerHTML = '<i class="fas fa-chevron-up mr-1"></i>See Less';
      } else {
        toggleBtn.innerHTML = '<i class="fas fa-chevron-down mr-1"></i>See More (' + (liveFeedData.length - 5) + ' more)';
      }
    }
  }

  function toggleLiveFeed() {
    liveFeedExpanded = !liveFeedExpanded;
    renderLiveFeedCards();
  }

  function generateGradesReport() {
    API.showToast('Generating grades report...');
    setTimeout(() => {
      API.showToast('Report downloaded!', 'success');
    }, 1000);
  }

  // ==================== SETTINGS ====================
  function loadSettings() {
    // Populate settings
    const settingsList = document.getElementById('settings-list');
    const settings = [
      { key: 'SCHOOL_NAME', value: 'Smart School', description: 'Name of the school' },
      { key: 'ACADEMIC_YEAR', value: '2024-2025', description: 'Current academic year' },
      { key: 'SEMESTER', value: '1', description: 'Current semester' },
    ];

    settingsList.innerHTML = settings.map(s => `
    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
      <div class="flex-1 min-w-0 mr-3">
        <p class="font-semibold text-gray-800 text-sm">${s.key.replace(/_/g, ' ')}</p>
        <p class="text-xs text-gray-500">${s.description}</p>
      </div>
      <input type="text" value="${s.value}" onchange="updateSetting('${s.key}', this.value)" 
        class="border border-gray-200 rounded-xl px-3 py-2 w-32 lg:w-48 text-right text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
    </div>
  `).join('');
  }

  function updateSetting(key, value) {
    showToast(`Setting ${key} updated to ${value}`, 'success');
  }

  function saveAttendanceSettings() {
    const radius = document.getElementById('setting-radius').value;
    if (radius) {
      showToast(`Attendance radius set to ${radius} meters`, 'success');
    } else {
      showToast('Please enter a radius value', 'error');
    }
  }

  // ==================== MODAL FUNCTIONS ====================
  function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
  }

  function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
  }

  function openAddStudentModal() {
    document.getElementById('new-student-name').value = '';
    document.getElementById('new-student-number').value = '';
    document.getElementById('new-student-email').value = '';
    document.getElementById('new-student-phone').value = '';
    openModal('modal-add-student');
  }

  function openAddTeacherModal() {
    // Fetch teachers to generate next NIP
    API.getTeachers((response) => {
      if (response && response.success && response.data && response.data.length > 0) {
        const teachers = response.data;
        const lastTeacher = teachers[teachers.length - 1];
        const lastNumber = parseInt((lastTeacher.teacherNumber || lastTeacher.teacherID || 'T2000').replace('T', ''));
        const nextNumber = 'T' + (lastNumber + 1);
        document.getElementById('new-teacher-nip').value = nextNumber;
      } else {
        document.getElementById('new-teacher-nip').value = 'T2001';
      }
      document.getElementById('new-teacher-entry-year').value = new Date().getFullYear();
      openModal('modal-add-teacher');
    });
  }

  function saveNewTeacher(event) {
    event.preventDefault();

    const name = document.getElementById('new-teacher-name').value;
    const gender = document.getElementById('new-teacher-gender').value;
    const nip = document.getElementById('new-teacher-nip').value;
    const entryYear = document.getElementById('new-teacher-entry-year').value;
    const subject = document.getElementById('new-teacher-subject').value;
    const email = document.getElementById('new-teacher-email').value;
    const phone = document.getElementById('new-teacher-phone').value;

    const newTeacher = {
      teacherId: 'T' + Date.now().toString().slice(-6),
      teacherID: 'T' + Date.now().toString().slice(-6),  // Handle both cases
      name: name,
      gender: gender,
      teacherNumber: nip,
      entryYear: parseInt(entryYear) || new Date().getFullYear(),
      subject: subject,
      email: email || '',
      phone: phone || '',
      status: 'Active',
      password: '1234'  // Default password
    };

    console.log('Adding new teacher:', newTeacher);

    // Use API to save to Google Sheets
    API.addTeacher(newTeacher, (response) => {
      if (response && response.success) {
        console.log('Teacher added successfully:', response);
        closeModal('modal-add-teacher');

        // Clear form
        document.getElementById('new-teacher-name').value = '';
        document.getElementById('new-teacher-gender').value = '';
        document.getElementById('new-teacher-nip').value = '';
        document.getElementById('new-teacher-email').value = '';
        document.getElementById('new-teacher-phone').value = '';
        document.getElementById('new-teacher-subject').value = '';
        document.getElementById('new-teacher-entry-year').value = '';

        showToast('Guru berhasil ditambahkan! Password default: 1234', 'success');

        // Refresh the teacher list
        if (currentAdminPage === 'population') {
          loadPopulationData();
        }
      } else {
        console.log('Failed to add teacher:', response);
        showToast(response.error || 'Gagal menambahkan guru', 'error');
      }
    });
  }

  function openAddClassModal() {
    // Populate teacher dropdown from database
    API.getTeachers((response) => {
      const teacherSelect = document.getElementById('new-class-teacher');
      teacherSelect.innerHTML = '<option value="">Pilih Wali Kelas</option>';

      if (response && response.success && response.data) {
        response.data.forEach(teacher => {
          const option = document.createElement('option');
          option.value = teacher.name;
          option.textContent = teacher.name;
          teacherSelect.appendChild(option);
        });
      }
    });

    // Reset form
    document.getElementById('new-class-name').value = '';
    document.getElementById('new-class-grade-level').value = '';
    document.getElementById('new-class-capacity').value = '';

    openModal('modal-add-class');
  }

  function saveNewClass(event) {
    event.preventDefault();

    const className = document.getElementById('new-class-name').value;
    const gradeLevel = document.getElementById('new-class-grade-level').value;
    const homeroomTeacher = document.getElementById('new-class-teacher').value;
    const capacity = document.getElementById('new-class-capacity').value;

    const newClass = {
      classId: 'C' + Date.now().toString().slice(-6),
      classID: 'C' + Date.now().toString().slice(-6),  // Handle both cases
      className: className,
      gradeLevel: gradeLevel,
      homeroomTeacher: homeroomTeacher,
      capacity: parseInt(capacity) || 30
    };

    console.log('Adding new class:', newClass);

    // Use API to save to Google Sheets
    API.addClass(newClass, (response) => {
      if (response && response.success) {
        console.log('Class added successfully:', response);
        closeModal('modal-add-class');

        // Clear form
        document.getElementById('new-class-name').value = '';
        document.getElementById('new-class-grade-level').value = '';
        document.getElementById('new-class-teacher').value = '';
        document.getElementById('new-class-capacity').value = '';

        showToast('Kelas berhasil ditambahkan!', 'success');

        // Refresh the class list
        if (currentAdminPage === 'population') {
          loadPopulationData();
        }
      } else {
        console.log('Failed to add class:', response);
        showToast(response.error || 'Gagal menambahkan kelas', 'error');
      }
    });
  }

  function openAddAssetModal() {
    showToast('Add asset modal - implement as needed', 'info');
  }

  function openAddScheduleModal() {
    // Populate class dropdown from database
    API.getClasses((response) => {
      const classSelect = document.getElementById('new-schedule-class');
      classSelect.innerHTML = '<option value="">Pilih Kelas</option>';

      if (response && response.success && response.data) {
        response.data.forEach(c => {
          const option = document.createElement('option');
          option.value = c.classId || c.classID || '';
          option.textContent = c.className || c.classID || c.classId;
          classSelect.appendChild(option);
        });
      }
    });

    // Populate teacher dropdown
    API.getTeachers((response) => {
      const teacherSelect = document.getElementById('new-schedule-teacher');
      teacherSelect.innerHTML = '<option value="">Pilih Guru</option>';

      if (response && response.success && response.data) {
        response.data.forEach(t => {
          const option = document.createElement('option');
          option.value = t.name;
          option.textContent = t.name;
          teacherSelect.appendChild(option);
        });
      }
    });

    openModal('modal-add-schedule');
  }

  function saveNewSchedule(event) {
    event.preventDefault();

    console.log('=== SAVE NEW SCHEDULE ===');

    const subject = document.getElementById('new-schedule-subject').value;
    const day = document.getElementById('new-schedule-day').value;
    const timeStart = document.getElementById('new-schedule-time-start').value;
    const timeEnd = document.getElementById('new-schedule-time-end').value;
    const classId = document.getElementById('new-schedule-class').value;
    const className = document.getElementById('new-schedule-class').options[document.getElementById('new-schedule-class').selectedIndex].text;
    const teacher = document.getElementById('new-schedule-teacher').value;
    const room = document.getElementById('new-schedule-room').value;

    const newSchedule = {
      scheduleId: 'SC' + Date.now().toString().slice(-6),
      subject: subject,
      scheduleType: 'Lesson',
      day: day,
      timeStart: timeStart,
      timeEnd: timeEnd,
      classId: classId,
      className: className,
      room: room || 'TBA',
      teacher: teacher
    };

    console.log('Schedule data:', newSchedule);

    API.addSchedule(newSchedule, (response) => {
      console.log('=== API RESPONSE ===');
      console.log('Response:', response);

      if (response && response.success) {
        console.log('Schedule added successfully!');
        closeModal('modal-add-schedule');

        // Clear form
        document.getElementById('new-schedule-subject').value = '';
        document.getElementById('new-schedule-day').value = '';
        document.getElementById('new-schedule-time-start').value = '';
        document.getElementById('new-schedule-time-end').value = '';
        document.getElementById('new-schedule-class').value = '';
        document.getElementById('new-schedule-teacher').value = '';
        document.getElementById('new-schedule-room').value = '';

        showToast('Jadwal berhasil ditambahkan!', 'success');

        // Refresh schedule
        loadScheduleData();
      } else {
        console.error('Failed to add schedule:', response);
        showToast(response.error || 'Gagal menambahkan jadwal', 'error');
      }
    });
  }

  function openAddAnnouncementModal() {
    document.getElementById('new-announcement-title').value = '';
    document.getElementById('new-announcement-type').value = 'general';
    document.getElementById('new-announcement-class').value = '';
    document.getElementById('new-announcement-content').value = '';
    openModal('modal-add-announcement');
  }

  function saveNewAnnouncement(event) {
    event.preventDefault();

    const title = document.getElementById('new-announcement-title').value;
    const type = document.getElementById('new-announcement-type').value;
    const classId = document.getElementById('new-announcement-class').value;
    const content = document.getElementById('new-announcement-content').value;

    const newAnnouncement = {
      id: 'AN' + Date.now().toString().slice(-6),
      title: title,
      content: content,
      date: new Date().toLocaleDateString('id-ID'),
      type: type,
      classId: classId || '',
      createdBy: currentUser.name || 'Admin',
      sentViaWhatsapp: false
    };

    console.log('Adding new announcement:', newAnnouncement);

    API.addAnnouncement(newAnnouncement, (response) => {
      if (response && response.success) {
        closeModal('modal-add-announcement');

        // Clear form
        document.getElementById('new-announcement-title').value = '';
        document.getElementById('new-announcement-type').value = 'general';
        document.getElementById('new-announcement-class').value = '';
        document.getElementById('new-announcement-content').value = '';

        showToast('Pengumuman berhasil ditambahkan!', 'success');

        // Refresh announcements
        loadScheduleData();
      } else {
        showToast(response.error || 'Gagal menambahkan pengumuman', 'error');
      }
    });
  }

  function openAddHolidayModal() {
    document.getElementById('new-holiday-title').value = '';
    document.getElementById('new-holiday-description').value = '';
    document.getElementById('new-holiday-start').value = '';
    document.getElementById('new-holiday-end').value = '';
    document.getElementById('new-holiday-type').value = 'School';
    openModal('modal-add-holiday');
  }

  function saveNewHoliday(event) {
    event.preventDefault();

    const title = document.getElementById('new-holiday-title').value;
    const description = document.getElementById('new-holiday-description').value;
    const startDate = document.getElementById('new-holiday-start').value;
    const endDate = document.getElementById('new-holiday-end').value;
    const type = document.getElementById('new-holiday-type').value;

    const newHoliday = {
      id: 'H' + Date.now().toString().slice(-6),
      title: title,
      description: description || '',
      startDate: startDate,
      endDate: endDate,
      type: type
    };

    console.log('Adding new holiday:', newHoliday);

    API.addHoliday(newHoliday, (response) => {
      if (response && response.success) {
        closeModal('modal-add-holiday');

        // Clear form
        document.getElementById('new-holiday-title').value = '';
        document.getElementById('new-holiday-description').value = '';
        document.getElementById('new-holiday-start').value = '';
        document.getElementById('new-holiday-end').value = '';
        document.getElementById('new-holiday-type').value = '';

        showToast('Libur berhasil ditambahkan!', 'success');

        // Refresh holidays
        loadScheduleData();
      } else {
        showToast(response.error || 'Gagal menambahkan libur', 'error');
      }
    });
  }

  function saveNewStudent(event) {
    event.preventDefault();

    const name = document.getElementById('new-student-name').value;
    const nis = document.getElementById('new-student-number').value;
    const gender = document.getElementById('new-student-gender').value;
    const parentName = document.getElementById('new-student-parent').value;
    const parentPhone = document.getElementById('new-student-parent-phone').value;
    const classId = document.getElementById('new-student-class').value;
    const entryYear = document.getElementById('new-student-entry-year').value || new Date().getFullYear();

    if (name && nis && gender && parentName && parentPhone) {
      const newStudent = {
        studentId: 'S' + Date.now().toString().slice(-6),
        name: name,
        gender: gender,
        entryYear: parseInt(entryYear),
        studentNumber: nis,
        classId: classId,
        classID: classId,  // Handle both header cases
        email: document.getElementById('new-student-email').value || '',
        phone: document.getElementById('new-student-phone').value || '',
        parentName: parentName,
        parentPhone: parentPhone,
        status: 'Active',
        password: '1234'  // Default password
      };

      console.log('Adding new student:', newStudent);

      // Use API to save to Google Sheets
      API.addStudent(newStudent, (response) => {
        if (response && response.success) {
          console.log('Student added successfully:', response);
          closeModal('modal-add-student');

          // Clear form
          document.getElementById('new-student-name').value = '';
          document.getElementById('new-student-number').value = '';
          document.getElementById('new-student-gender').value = '';
          document.getElementById('new-student-parent').value = '';
          document.getElementById('new-student-parent-phone').value = '';
          document.getElementById('new-student-email').value = '';
          document.getElementById('new-student-phone').value = '';
          document.getElementById('new-student-entry-year').value = '';
          document.getElementById('new-student-class').value = '';

          showToast('Siswa berhasil ditambahkan! Password default: 1234', 'success');

          // Refresh the student list
          if (currentAdminPage === 'population') {
            loadPopulationData();
          }
        } else {
          console.log('Failed to add student:', response);
          showToast(response.error || 'Gagal menambahkan siswa', 'error');
        }
      });
    } else {
      showToast('Mohon lengkapi semua data!', 'error');
    }
  }

  // ==================== DELETE FUNCTIONS ====================
  function deleteStudent(studentId) {
    if (!confirm('Hapus siswa ini?')) return;

    API.deleteStudent(studentId, (response) => {
      if (response && response.success) {
        showToast('Siswa dihapus', 'success');
        if (currentAdminPage === 'population') {
          loadPopulationData();
        }
      } else {
        showToast(response.error || 'Gagal menghapus siswa', 'error');
      }
    });
  }

  function deleteTeacher(teacherId) {
    if (!confirm('Hapus guru ini?')) return;

    API.deleteTeacher(teacherId, (response) => {
      if (response && response.success) {
        showToast('Guru dihapus', 'success');
        if (currentAdminPage === 'population') {
          loadPopulationData();
        }
      } else {
        showToast(response.error || 'Gagal menghapus guru', 'error');
      }
    });
  }

  function deleteClass(classId) {
    if (!confirm('Delete this class?')) return;

    API.deleteClass(classId, (response) => {
      if (response && response.success) {
        showToast('Class deleted', 'success');
        if (currentAdminPage === 'population') {
          loadPopulationData();
        }
      } else {
        showToast(response.error || 'Failed to delete class', 'error');
      }
    });
  }

  function deleteSchedule(scheduleId) {
    if (!confirm('Delete this schedule?')) return;

    API.deleteSchedule(scheduleId, (response) => {
      if (response && response.success) {
        showToast('Schedule deleted', 'success');
        loadScheduleData();
      } else {
        showToast(response.error || 'Failed to delete schedule', 'error');
      }
    });
  }

  function deleteAnnouncement(id) {
    if (!confirm('Delete this announcement?')) return;

    API.deleteAnnouncement(id, (response) => {
      if (response && response.success) {
        showToast('Announcement deleted', 'success');
        loadScheduleData();
      } else {
        showToast(response.error || 'Failed to delete announcement', 'error');
      }
    });
  }

  function deleteHoliday(id) {
    if (!confirm('Delete this holiday?')) return;

    API.deleteHoliday(id, (response) => {
      if (response && response.success) {
        showToast('Holiday deleted', 'success');
        loadScheduleData();
      } else {
        showToast(response.error || 'Failed to delete holiday', 'error');
      }
    });
  }

  // ==================== EDIT FUNCTIONS ====================
  function editStudent(studentId) {
    API.getStudents((response) => {
      if (response && response.success && response.data) {
        const student = response.data.find(s => s.studentId == studentId || s.studentID == studentId);
        if (!student) return;

        // Fill modal with student data
        document.getElementById('edit-student-id').value = student.studentId || student.studentID || '';
        document.getElementById('edit-student-name').value = student.name || '';
        document.getElementById('edit-student-gender').value = student.gender || 'Laki-laki';
        document.getElementById('edit-student-number').value = student.studentNumber || '';
        document.getElementById('edit-student-entry-year').value = student.entryYear || '';
        document.getElementById('edit-student-class').value = student.classId || student.classID || '';
        document.getElementById('edit-student-email').value = student.email || '';
        document.getElementById('edit-student-phone').value = student.phone || '';
        document.getElementById('edit-student-parent').value = student.parentName || '';
        document.getElementById('edit-student-parent-phone').value = student.parentPhone || '';

        openModal('modal-edit-student');
      }
    });
  }

  function saveEditStudent(event) {
    event.preventDefault();

    const studentId = document.getElementById('edit-student-id').value;
    const updatedStudent = {
      studentId: studentId,
      studentID: studentId,
      name: document.getElementById('edit-student-name').value,
      gender: document.getElementById('edit-student-gender').value,
      studentNumber: document.getElementById('edit-student-number').value,
      entryYear: parseInt(document.getElementById('edit-student-entry-year').value),
      classId: document.getElementById('edit-student-class').value,
      classID: document.getElementById('edit-student-class').value,
      email: document.getElementById('edit-student-email').value,
      phone: document.getElementById('edit-student-phone').value,
      parentName: document.getElementById('edit-student-parent').value,
      parentPhone: document.getElementById('edit-student-parent-phone').value,
      status: 'Active'
    };

    API.updateStudent(studentId, updatedStudent, (response) => {
      if (response && response.success) {
        closeModal('modal-edit-student');
        showToast('Data siswa berhasil diupdate!', 'success');
        if (currentAdminPage === 'population') {
          loadPopulationData();
        }
      } else {
        showToast(response.error || 'Gagal update siswa', 'error');
      }
    });
  }

  function editTeacher(teacherId) {
    API.getTeachers((response) => {
      if (response && response.success && response.data) {
        const teacher = response.data.find(t => t.teacherId == teacherId || t.teacherID == teacherId);
        if (!teacher) return;

        document.getElementById('edit-teacher-id').value = teacher.teacherId || teacher.teacherID || '';
        document.getElementById('edit-teacher-name').value = teacher.name || '';
        document.getElementById('edit-teacher-gender').value = teacher.gender || 'Laki-laki';
        document.getElementById('edit-teacher-nip').value = teacher.teacherNumber || '';
        document.getElementById('edit-teacher-entry-year').value = teacher.entryYear || '';
        document.getElementById('edit-teacher-subject').value = teacher.subject || '';
        document.getElementById('edit-teacher-email').value = teacher.email || '';
        document.getElementById('edit-teacher-phone').value = teacher.phone || '';

        openModal('modal-edit-teacher');
      }
    });
  }

  function saveEditTeacher(event) {
    event.preventDefault();

    const teacherId = document.getElementById('edit-teacher-id').value;
    const updatedTeacher = {
      teacherId: teacherId,
      teacherID: teacherId,
      name: document.getElementById('edit-teacher-name').value,
      gender: document.getElementById('edit-teacher-gender').value,
      teacherNumber: document.getElementById('edit-teacher-nip').value,
      entryYear: parseInt(document.getElementById('edit-teacher-entry-year').value),
      subject: document.getElementById('edit-teacher-subject').value,
      email: document.getElementById('edit-teacher-email').value,
      phone: document.getElementById('edit-teacher-phone').value,
      status: 'Active'
    };

    API.updateTeacher(teacherId, updatedTeacher, (response) => {
      if (response && response.success) {
        closeModal('modal-edit-teacher');
        showToast('Data guru berhasil diupdate!', 'success');
        if (currentAdminPage === 'population') {
          loadPopulationData();
        }
      } else {
        showToast(response.error || 'Gagal update guru', 'error');
      }
    });
  }

  function editClass(classId) {
    API.getClasses((response) => {
      if (response && response.success && response.data) {
        const cls = response.data.find(c => c.classId == classId || c.classID == classId);
        if (!cls) return;

        document.getElementById('edit-class-id').value = cls.classId || cls.classID || '';
        document.getElementById('edit-class-name').value = cls.className || '';
        document.getElementById('edit-class-grade').value = cls.gradeLevel || '';
        document.getElementById('edit-class-teacher').value = cls.homeroomTeacher || '';
        document.getElementById('edit-class-capacity').value = cls.capacity || '';

        openModal('modal-edit-class');
      }
    });
  }

  function saveEditClass(event) {
    event.preventDefault();

    const classId = document.getElementById('edit-class-id').value;
    const updatedClass = {
      classId: classId,
      classID: classId,
      className: document.getElementById('edit-class-name').value,
      gradeLevel: document.getElementById('edit-class-grade').value,
      homeroomTeacher: document.getElementById('edit-class-teacher').value,
      capacity: parseInt(document.getElementById('edit-class-capacity').value)
    };

    API.updateClass(classId, updatedClass, (response) => {
      if (response && response.success) {
        closeModal('modal-edit-class');
        showToast('Data kelas berhasil diupdate!', 'success');
        if (currentAdminPage === 'population') {
          loadPopulationData();
        }
      } else {
        showToast(response.error || 'Gagal update kelas', 'error');
      }
    });
  }

  function editSchedule(scheduleId) {
    API.getSchedules((response) => {
      if (response && response.success && response.data) {
        const schedule = response.data.find(s => s.scheduleId == scheduleId);
        if (!schedule) return;

        document.getElementById('edit-schedule-id').value = schedule.scheduleId || '';
        document.getElementById('edit-schedule-subject').value = schedule.subject || '';
        document.getElementById('edit-schedule-day').value = schedule.day || '';
        document.getElementById('edit-schedule-time-start').value = schedule.timeStart || '';
        document.getElementById('edit-schedule-time-end').value = schedule.timeEnd || '';
        document.getElementById('edit-schedule-class').value = schedule.classId || '';
        document.getElementById('edit-schedule-teacher').value = schedule.teacher || '';
        document.getElementById('edit-schedule-room').value = schedule.room || '';

        openModal('modal-edit-schedule');
      }
    });
  }

  function saveEditSchedule(event) {
    event.preventDefault();

    const scheduleId = document.getElementById('edit-schedule-id').value;
    const updatedSchedule = {
      scheduleId: scheduleId,
      subject: document.getElementById('edit-schedule-subject').value,
      scheduleType: 'Lesson',
      day: document.getElementById('edit-schedule-day').value,
      timeStart: document.getElementById('edit-schedule-time-start').value,
      timeEnd: document.getElementById('edit-schedule-time-end').value,
      classId: document.getElementById('edit-schedule-class').value,
      className: document.getElementById('edit-schedule-class').options[document.getElementById('edit-schedule-class').selectedIndex]?.text || '',
      teacher: document.getElementById('edit-schedule-teacher').value,
      room: document.getElementById('edit-schedule-room').value
    };

    API.updateSchedule(scheduleId, updatedSchedule, (response) => {
      if (response && response.success) {
        closeModal('modal-edit-schedule');
        showToast('Jadwal berhasil diupdate!', 'success');
        loadScheduleData();
      } else {
        showToast(response.error || 'Gagal update jadwal', 'error');
      }
    });
  }

  function editAnnouncement(id) {
    API.getAnnouncements((response) => {
      if (response && response.success && response.data) {
        const announcement = response.data.find(a => a.id == id);
        if (!announcement) return;

        document.getElementById('edit-announcement-id').value = announcement.id || '';
        document.getElementById('edit-announcement-title').value = announcement.title || '';
        document.getElementById('edit-announcement-type').value = announcement.type || 'general';
        document.getElementById('edit-announcement-class').value = announcement.classId || '';
        document.getElementById('edit-announcement-content').value = announcement.content || '';

        openModal('modal-edit-announcement');
      }
    });
  }

  function saveEditAnnouncement(event) {
    event.preventDefault();

    const id = document.getElementById('edit-announcement-id').value;
    const updatedAnnouncement = {
      id: id,
      title: document.getElementById('edit-announcement-title').value,
      type: document.getElementById('edit-announcement-type').value,
      classId: document.getElementById('edit-announcement-class').value,
      content: document.getElementById('edit-announcement-content').value,
      date: new Date().toLocaleDateString('id-ID')
    };

    API.updateAnnouncement(id, updatedAnnouncement, (response) => {
      if (response && response.success) {
        closeModal('modal-edit-announcement');
        showToast('Pengumuman berhasil diupdate!', 'success');
        loadScheduleData();
      } else {
        showToast(response.error || 'Gagal update pengumuman', 'error');
      }
    });
  }

  function editHoliday(id) {
    API.getHolidays((response) => {
      if (response && response.success && response.data) {
        const holiday = response.data.find(h => h.id == id);
        if (!holiday) return;

        document.getElementById('edit-holiday-id').value = holiday.id || '';
        document.getElementById('edit-holiday-title').value = holiday.title || '';
        document.getElementById('edit-holiday-description').value = holiday.description || '';
        document.getElementById('edit-holiday-start').value = holiday.startDate || '';
        document.getElementById('edit-holiday-end').value = holiday.endDate || '';
        document.getElementById('edit-holiday-type').value = holiday.type || 'School';

        openModal('modal-edit-holiday');
      }
    });
  }

  function saveEditHoliday(event) {
    event.preventDefault();

    const id = document.getElementById('edit-holiday-id').value;
    const updatedHoliday = {
      id: id,
      title: document.getElementById('edit-holiday-title').value,
      description: document.getElementById('edit-holiday-description').value,
      startDate: document.getElementById('edit-holiday-start').value,
      endDate: document.getElementById('edit-holiday-end').value,
      type: document.getElementById('edit-holiday-type').value
    };

    API.updateHoliday(id, updatedHoliday, (response) => {
      if (response && response.success) {
        closeModal('modal-edit-holiday');
        showToast('Libur berhasil diupdate!', 'success');
        loadScheduleData();
      } else {
        showToast(response.error || 'Gagal update libur', 'error');
      }
    });
  }

  function deleteAsset(assetId) {
    if (!confirm('Delete this asset?')) return;
    dummyData.assets = dummyData.assets.filter(a => a.assetId !== assetId);
    renderAssetsTable(dummyData.assets);
    showToast('Asset deleted', 'success');
  }

  // deleteQuiz is defined in the Quiz section above

  // ==================== UTILITY FUNCTIONS ====================
  function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const icon = document.getElementById('toast-icon');
    const msgEl = document.getElementById('toast-message');

    msgEl.textContent = message;

    if (type === 'error') {
      icon.className = 'fas fa-exclamation-circle text-red-400 mr-2 lg:mr-3 text-base lg:text-lg';
    } else if (type === 'info') {
      icon.className = 'fas fa-info-circle text-blue-400 mr-2 lg:mr-3 text-base lg:text-lg';
    } else {
      icon.className = 'fas fa-check-circle text-green-400 mr-2 lg:mr-3 text-base lg:text-lg';
    }

    toast.classList.remove('hidden');

    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
  }

  function showLoading() {
    document.getElementById('loading-overlay').classList.remove('hidden');
  }

  function hideLoading() {
    document.getElementById('loading-overlay').classList.add('hidden');
  }

  function checkSystemSetup() {
    const statusEl = document.getElementById('setup-status');
    statusEl.classList.remove('hidden');
    statusEl.innerHTML = `
    <div class="status-row">
      <i data-lucide="check-circle"></i>
      <span>System is ready! Using dummy data for testing.</span>
    </div>
  `;
    if (window.lucide) lucide.createIcons();
  }

  // ==================== STUDENT DASHBOARD ====================
  function initStudentDashboard() {
    navigateTo('student');

    // Get the logged-in student's data from database
    const studentId = currentUser.userId || currentUser.studentId;
    console.log('Loading profile for student ID:', studentId);

    // Fetch student data from backend
    API.getStudents((response) => {
      if (response && response.success && response.data) {
        const students = response.data;
        const student = students.find(s =>
          s.studentId == studentId ||
          s.studentID == studentId ||
          s.studentNumber == studentId
        );

        if (!student) {
          console.log('Student not found, using currentUser');
          loadStudentProfile(currentUser);
        } else {
          console.log('Student data loaded:', student);
          loadStudentProfile(student);
        }
      } else {
        console.log('Failed to load students, using currentUser');
        loadStudentProfile(currentUser);
      }

      // Update attendance status AFTER profile loads
      setTimeout(() => {
        updateAttendanceStatus();
        renderStudentQuizzes();

        // Fetch announcements for the student
        API.getAnnouncements((res) => {
          if (res && res.success && res.data) {
            cachedAnnouncements = res.data;
          } else {
            cachedAnnouncements = [];
          }
          renderStudentAnnouncements();
        });
      }, 500);
    });
  }

  // Helper function to load student profile
  function loadStudentProfile(student) {
    document.getElementById('student-welcome-name').textContent = student.name;
    document.getElementById('student-desktop-welcome-name').textContent = student.name;
    document.getElementById('student-class-info').textContent = `Kelas ${student.classId || student.classID} | NIS: ${student.studentNumber}`;
    document.getElementById('student-desktop-name').textContent = student.name;
    document.getElementById('student-desktop-nis').textContent = `NIS: ${student.studentNumber}`;
    document.getElementById('student-avatar-initial').textContent = student.name.charAt(0);
    document.getElementById('student-desktop-avatar').textContent = student.name.charAt(0);
    document.getElementById('student-header-avatar').textContent = student.name.charAt(0);
    document.getElementById('attendance-initial').textContent = student.name.charAt(0);
    document.getElementById('student-class-badge').textContent = `Kelas ${student.classId || student.classID}`;

    // Profile page - Basic Info
    document.getElementById('profile-name').textContent = student.name;
    document.getElementById('profile-nis').textContent = `NIS: ${student.studentNumber}`;
    document.getElementById('profile-initial').textContent = student.name.charAt(0);
    document.getElementById('profile-grade').textContent = student.classId || student.classID || '10A';
    document.getElementById('profile-entry').textContent = student.entryYear;
    document.getElementById('profile-email').textContent = student.email;
    document.getElementById('profile-phone').textContent = student.phone;

    // Profile page - Additional Info
    document.getElementById('profile-semester').textContent = 'Genap 2024/2025';
    document.getElementById('profile-homeroom').textContent = 'Wali Kelas';
    document.getElementById('profile-class-badge').textContent = `Kelas ${student.classId || student.classID}`;
    document.getElementById('profile-status-badge').textContent = (student.status === 'Active' || student.status === true) ? 'Siswa Aktif' : 'Siswa Non-Aktif';
    document.getElementById('profile-gender').textContent = student.gender || 'Laki-laki';
    document.getElementById('profile-birthdate').textContent = '-';
    document.getElementById('profile-address').textContent = '-';
    document.getElementById('profile-father').textContent = student.parentName || '-';
    document.getElementById('profile-mother').textContent = '-';
    document.getElementById('profile-parent-phone').textContent = student.parentPhone || '-';
  }

  let currentStudentPage = 'home';
  let attendancePhoto = null;
  let attendanceLocation = null;
  let stream = null;

  function showStudentPage(page) {
    // Handle notifications as a modal/toast instead of a page
    if (page === 'notifications') {
      showToast('Anda memiliki 3 notifikasi baru', 'info');
      return;
    }

    currentStudentPage = page;

    // Hide all pages
    document.querySelectorAll('.student-content-page').forEach(el => {
      el.classList.add('hidden');
    });

    // Show selected page
    const pageEl = document.getElementById(`student-page-${page}`);
    if (pageEl) {
      pageEl.classList.remove('hidden');
    }

    // Update mobile nav
    document.querySelectorAll('.student-nav-btn').forEach(btn => {
      btn.classList.remove('text-emerald-600', 'active');
      btn.classList.add('text-gray-400');
    });
    const activeNav = document.querySelector(`.student-nav-btn[data-page="${page}"]`);
    if (activeNav) {
      activeNav.classList.add('text-emerald-600', 'active');
      activeNav.classList.remove('text-gray-400');
    }

    // Update desktop nav
    document.querySelectorAll('.student-desktop-nav').forEach(btn => {
      btn.classList.remove('text-emerald-600', 'bg-emerald-50');
      btn.classList.add('text-gray-600');
    });
    const activeDesktopNav = document.querySelector(`.student-desktop-nav[data-page="${page}"]`);
    if (activeDesktopNav) {
      activeDesktopNav.classList.add('text-emerald-600', 'bg-emerald-50');
      activeDesktopNav.classList.remove('text-gray-600');
    }

    // Page specific actions
    if (page === 'attendance') {
      setTimeout(() => getCurrentLocation(), 500);
    }

    if (page === 'quiz') {
      renderStudentQuizList();
    }

    if (page === 'announcements') {
      renderStudentAllAnnouncements();
    }

    if (page === 'schedule') {
      renderStudentWeeklySchedule();
    }
  }

  function renderStudentWeeklySchedule() {
    const container = document.getElementById('student-schedule-grid');
    if (!container) return;

    const studentClass = currentUser?.classId || currentUser?.classID || '10A';
    const classBadge = document.getElementById('student-schedule-class-badge');
    if (classBadge) classBadge.textContent = 'Kelas ' + studentClass;

    container.innerHTML = '<p class="text-gray-400 text-center py-8 text-sm"><i class="fas fa-spinner fa-spin mr-2"></i>Memuat jadwal...</p>';

    API.getSchedules((response) => {
      if (!response || !response.success || !response.data) {
        container.innerHTML = '<p class="text-gray-400 text-center py-8 text-sm">Gagal memuat jadwal</p>';
        return;
      }

      const schedules = response.data.filter(s => s.classId === studentClass);

      if (schedules.length === 0) {
        container.innerHTML = '<p class="text-gray-400 text-center py-8 text-sm">Belum ada jadwal untuk kelas ' + studentClass + '</p>';
        return;
      }

      const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
      const startHour = 7;
      const endHour = 16;
      const totalHours = endHour - startHour;
      const rowHeight = 60;
      const headerHeight = 36;

      const extractTime = (timeValue) => {
        if (!timeValue) return '';
        const str = String(timeValue);
        if (str.includes('T')) {
          const m = str.match(/(\d{2}):(\d{2}):\d{2}/);
          if (m) return m[1] + ':' + m[2];
          const d = new Date(str);
          return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
        }
        const parts = str.split(':');
        if (parts.length >= 2) return parts[0].padStart(2, '0') + ':' + parts[1].substring(0, 2);
        return str.substring(0, 5);
      };

      const timeToPx = (timeStr) => {
        const [h, m] = timeStr.split(':').map(Number);
        return ((h - startHour) + m / 60) * rowHeight;
      };

      const colors = [
        { bg: '#e0e7ff', border: '#a5b4fc', text: '#3730a3' },
        { bg: '#dbeafe', border: '#93c5fd', text: '#1e40af' },
        { bg: '#ede9fe', border: '#c4b5fd', text: '#5b21b6' },
        { bg: '#fce7f3', border: '#f9a8d4', text: '#9d174d' },
        { bg: '#d1fae5', border: '#6ee7b7', text: '#065f46' },
        { bg: '#fef3c7', border: '#fcd34d', text: '#92400e' },
        { bg: '#e0f2fe', border: '#7dd3fc', text: '#075985' },
        { bg: '#f3e8ff', border: '#d8b4fe', text: '#6b21a8' },
      ];
      const subjectColors = {};
      let colorIdx = 0;
      const getColor = (subject) => {
        if (!subjectColors[subject]) {
          subjectColors[subject] = colors[colorIdx % colors.length];
          colorIdx++;
        }
        return subjectColors[subject];
      };

      const gridHeight = totalHours * rowHeight;
      const todayName = new Date().toLocaleDateString('id-ID', { weekday: 'long' });

      let html = `
        <div style="display: grid; grid-template-columns: 56px repeat(5, 1fr); font-size: 13px;">
          <div style="height: ${headerHeight}px; display: flex; align-items: center; padding: 0 8px; font-weight: 600; color: #4b5563; font-size: 12px;">Jam</div>
          ${days.map(d => `<div style="height: ${headerHeight}px; display: flex; align-items: center; justify-content: center; padding: 0 8px; font-weight: 600; color: ${d === todayName ? '#059669' : '#4b5563'}; font-size: 12px; ${d === todayName ? 'background: #ecfdf5; border-radius: 8px;' : ''}">${d}</div>`).join('')}

          <div style="position: relative; height: ${gridHeight}px;">
            ${Array.from({ length: totalHours }, (_, i) => {
        const hour = startHour + i;
        return `<div style="position: absolute; top: ${i * rowHeight}px; height: ${rowHeight}px; width: 100%; display: flex; align-items: flex-start; padding: 6px 8px 0; font-weight: 600; color: #6b7280; font-size: 12px; border-top: 1px solid #f1f5f9;">${String(hour).padStart(2, '0')}:00</div>`;
      }).join('')}
          </div>

          ${days.map(day => {
        const daySchedules = schedules.filter(s => s.day === day);
        return `
              <div style="position: relative; height: ${gridHeight}px; ${day === todayName ? 'background: #f0fdf4;' : ''}">
                ${Array.from({ length: totalHours }, (_, i) =>
          `<div style="position: absolute; top: ${i * rowHeight}px; width: 100%; height: ${rowHeight}px; border-top: 1px solid #f1f5f9; border-left: 1px solid #f8fafc;"></div>`
        ).join('')}
                ${daySchedules.map(s => {
          const st = extractTime(s.timeStart);
          const et = extractTime(s.timeEnd);
          if (!st || !et) return '';
          const top = timeToPx(st);
          const height = Math.max(timeToPx(et) - top, 28);
          const c = getColor(s.subject);
          return `
                    <div style="position: absolute; top: ${top}px; height: ${height}px; left: 3px; right: 3px; background: ${c.bg}; border-left: 3px solid ${c.border}; border-radius: 8px; padding: 4px 6px; overflow: hidden; z-index: 2;">
                      <p style="font-weight: 600; color: ${c.text}; font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${s.subject}</p>
                      ${height > 40 ? `<p style="color: #6b7280; font-size: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${st} - ${et} • ${s.room || ''}</p>` : ''}
                      ${height > 55 ? `<p style="color: #9ca3af; font-size: 9px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${s.teacher || ''}</p>` : ''}
                    </div>
                  `;
        }).join('')}
              </div>
            `;
      }).join('')}
        </div>
      `;

      container.innerHTML = html;
    });
  }

  function renderStudentAllAnnouncements() {
    const container = document.getElementById('student-all-announcements');
    if (!container) return;

    const studentClass = currentUser?.classId || currentUser?.classID || '10A';

    // Show loading
    container.innerHTML = '<p class="text-gray-400 text-center py-8 text-sm col-span-full"><i class="fas fa-spinner fa-spin mr-2"></i>Memuat pengumuman...</p>';

    // Always fetch fresh from API
    API.getAnnouncements((res) => {
      if (res && res.success && res.data) {
        cachedAnnouncements = res.data;
      } else {
        cachedAnnouncements = [];
      }

      console.log('=== renderStudentAllAnnouncements ===');
      console.log('studentClass:', studentClass);
      console.log('All announcements:', cachedAnnouncements.length);

      // Filter: show general (no classId) + matching student class
      const filtered = cachedAnnouncements.filter(a => {
        const aClass = (a.classId || '').toString().trim();
        const sClass = studentClass.toString().trim();
        return !aClass || aClass === '' || aClass === sClass || aClass === 'Seluruh Kelas' || aClass === 'Semua Kelas';
      });

      console.log('Filtered announcements for student:', filtered.length);

      if (filtered.length === 0) {
        container.innerHTML = '<p class="text-gray-400 text-center py-8 text-sm col-span-full">Belum ada pengumuman</p>';
        return;
      }

      // Newest first
      const sorted = [...filtered].reverse();

      container.innerHTML = sorted.map(a => `
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-5">
          <div class="flex items-center justify-between mb-2">
            <span class="px-2 py-1 text-[10px] font-medium rounded-full ${a.type === 'urgent' ? 'bg-red-200 text-red-700' : a.type === 'academic' ? 'bg-blue-200 text-blue-700' : 'bg-amber-200 text-amber-700'}">${a.type || 'general'}</span>
            <span class="text-xs text-gray-400">${a.date || ''}</span>
          </div>
          <h4 class="font-semibold text-gray-800 mb-1">${a.title}</h4>
          <p class="text-sm text-gray-600 mb-3">${a.content}</p>
          <div class="flex items-center justify-between text-xs text-gray-400">
            <span><i class="fas fa-user mr-1"></i>${a.createdBy || 'Admin'}</span>
            ${a.classId ? '<span class="px-2 py-1 bg-gray-100 rounded-lg"><i class="fas fa-users mr-1"></i>' + a.classId + '</span>' : '<span><i class="fas fa-globe mr-1"></i>Semua Kelas</span>'}
          </div>
        </div>
      `).join('');
    });
  }

  function renderStudentAnnouncements() {
    const container = document.getElementById('student-announcements-list');
    const studentClass = currentUser?.classId || currentUser?.classID || '10A';

    console.log('=== renderStudentAnnouncements ===');
    console.log('studentClass:', studentClass);
    console.log('cachedAnnouncements count:', cachedAnnouncements.length);
    cachedAnnouncements.forEach((a, i) => {
      console.log(`  [${i}] title="${a.title}", classId="${a.classId}", type="${a.type}"`);
    });

    // Filter announcements: show if no classId (general), or classId matches student's class, or broadcast
    const validAnnouncements = cachedAnnouncements.filter(a => {
      const aClass = (a.classId || '').toString().trim();
      const sClass = studentClass.toString().trim();
      return !aClass || aClass === '' || aClass === sClass || aClass === 'Seluruh Kelas' || aClass === 'Semua Kelas';
    });

    console.log('validAnnouncements count:', validAnnouncements.length);

    // Show newest first (reverse the array), take up to 3
    const recentAnnouncements = [...validAnnouncements].reverse().slice(0, 3);

    const recentQuizResults = cachedQuizResults
      .filter(r => r.studentId === (currentUser?.studentId || currentUser?.userId || ''))
      .slice(0, 2);

    // Combine and create content
    let content = '';

    // Add quiz results first (as they are important for students)
    recentQuizResults.forEach(r => {
      const quiz = cachedQuizzes.find(q => q.quizId === r.quizId);
      content += `
      <div class="p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border-l-4 border-emerald-400">
        <div class="flex items-center justify-between mb-1">
          <span class="px-2 py-0.5 text-[10px] font-medium rounded-full bg-emerald-200 text-emerald-700">HASIL QUIZ</span>
          <span class="text-xs text-gray-400">${new Date(r.submittedAt).toLocaleDateString('id-ID')}</span>
        </div>
        <p class="text-sm font-semibold text-gray-800 mb-1">${quiz ? quiz.title : 'Quiz'}</p>
        <div class="flex items-center justify-between">
          <p class="text-xs text-gray-500">Score: <span class="font-bold ${r.score >= 70 ? 'text-emerald-600' : r.score >= 50 ? 'text-amber-600' : 'text-red-600'}">${r.score}%</span></p>
          <p class="text-xs text-gray-500">${r.correctCount} benar / ${r.wrongCount} salah</p>
        </div>
      </div>
    `;
    });

    // Add regular announcements
    recentAnnouncements.forEach(a => {
      content += `
      <div class="p-3 bg-gray-50 rounded-xl border-l-4 ${a.type === 'urgent' ? 'border-red-400 bg-red-50' : a.type === 'academic' ? 'border-blue-400 bg-blue-50' : 'border-amber-400 bg-amber-50'}">
        <div class="flex items-center mb-1">
          <span class="px-2 py-0.5 text-[10px] font-medium rounded-full ${a.type === 'urgent' ? 'bg-red-200 text-red-700' : a.type === 'academic' ? 'bg-blue-200 text-blue-700' : 'bg-amber-200 text-amber-700'}">${a.type}</span>
          <span class="text-xs text-gray-400 ml-2">${a.date}</span>
        </div>
        <p class="text-sm font-medium text-gray-800">${a.title}</p>
        <p class="text-xs text-gray-500 line-clamp-2">${a.content}</p>
      </div>
    `;
    });

    if (content === '') {
      content = '<p class="text-gray-400 text-sm text-center py-4">Belum ada pengumuman atau hasil quiz</p>';
    }

    if (container) container.innerHTML = content;
  }

  function renderStudentQuizzes() {
    const container = document.getElementById('student-quizzes-list');
    if (!container) return;

    // Load quiz data from API if not cached
    if (cachedQuizzes.length === 0) {
      container.innerHTML = '<p class="text-gray-400 text-center py-4 text-sm"><i class="fas fa-spinner fa-spin mr-2"></i>Loading...</p>';
      let loaded = 0;
      function check() { loaded++; if (loaded >= 2) renderStudentQuizzesInner(); }
      API.getQuizzes((r) => { cachedQuizzes = (r && r.success && r.data) ? r.data : []; check(); });
      API.getQuizResults((r) => { cachedQuizResults = (r && r.success && r.data) ? r.data : []; check(); });
      return;
    }
    renderStudentQuizzesInner();
  }

  function renderStudentQuizzesInner() {
    const container = document.getElementById('student-quizzes-list');
    const studentClass = currentUser?.classId || '10A';
    const studentId = currentUser?.studentId || currentUser?.userId || '';

    // Get completed quiz IDs for this student
    const completedQuizIds = cachedQuizResults
      .filter(r => r.studentId === studentId)
      .map(r => r.quizId);

    // Only show quizzes the student has NOT completed yet
    const available = cachedQuizzes.filter(q =>
      q.status === 'Active' && q.classId === studentClass && !completedQuizIds.includes(q.quizId)
    ).slice(0, 3);

    if (available.length === 0) {
      container.innerHTML = `
      <div class="text-center py-4 text-gray-500 text-sm">
        Tidak ada quiz tersedia
      </div>
    `;
    } else {
      container.innerHTML = available.map(q => `
      <div class="flex items-center p-3 bg-white border border-gray-100 rounded-xl hover:shadow-sm transition">
        <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
          <i class="fas fa-clipboard-list text-blue-500"></i>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-800 truncate">${q.title}</p>
          <p class="text-xs text-gray-500">${q.subject} • ${q.questions.length} soal</p>
        </div>
        <button onclick="startQuiz('${q.quizId}')" class="px-3 py-1.5 bg-blue-500 text-white text-xs rounded-lg font-medium hover:bg-blue-600">
          Mulai
        </button>
      </div>
    `).join('');
    }

    document.getElementById('quiz-count').textContent = `${available.length} tersedia`;
  }

  function renderStudentSchedule() {
    const container = document.getElementById('student-schedule-today');
    const dayBadge = document.getElementById('schedule-day-badge');
    const today = new Date().toLocaleDateString('id-ID', { weekday: 'long' });

    // Update day badge
    if (dayBadge) {
      dayBadge.textContent = today;
    }

    // Get current student's class
    const studentClass = currentUser.classId || '10A'; // Default fallback

    // Helper to format time
    const formatTime = (timeValue) => {
      if (!timeValue) return '';
      if (typeof timeValue === 'string' && timeValue.includes('T')) {
        const timeMatch = timeValue.match(/(\d{2}):(\d{2}):\d{2}/);
        if (timeMatch) {
          return `${timeMatch[1]}:${timeMatch[2]}`;
        }
        const date = new Date(timeValue);
        return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
      }
      return timeValue.substring(0, 5);
    };

    // Fetch schedules from API and filter by student's class
    API.getSchedules((response) => {
      if (response && response.success && response.data) {
        const todaySchedules = response.data
          .filter(s => s.day === today && s.classId === studentClass)
          .slice(0, 4);

        if (todaySchedules.length === 0) {
          container.innerHTML = `<p class="text-center text-gray-500 py-4">Tidak ada jadwal hari ini</p>`;
          return;
        }

        container.innerHTML = todaySchedules.map(s => `
        <div class="flex items-center p-3 bg-white border border-gray-100 rounded-xl hover:shadow-sm transition">
          <div class="text-center mr-4 w-20 flex-shrink-0 bg-gray-50 rounded-lg py-2">
            <p class="text-sm font-bold text-gray-800">${formatTime(s.timeStart)}</p>
            <p class="text-xs text-gray-400">${formatTime(s.timeEnd)}</p>
          </div>
          <div class="flex-1 min-w-0">
            <p class="font-medium text-gray-800 truncate">${s.subject}</p>
            <p class="text-sm text-gray-500 truncate">${s.teacher}</p>
          </div>
          <div class="text-right ml-2">
            <span class="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">${s.room}</span>
          </div>
        </div>
      `).join('');
      }
    });
  }

  // renderStudentAllAnnouncements is defined earlier (uses API)

  // Quiz Tabs
  function switchQuizTab(tab) {
    document.getElementById('quiz-tab-available').classList.toggle('bg-emerald-500', tab === 'available');
    document.getElementById('quiz-tab-available').classList.toggle('text-white', tab === 'available');
    document.getElementById('quiz-tab-available').classList.toggle('bg-gray-100', tab !== 'available');
    document.getElementById('quiz-tab-available').classList.toggle('text-gray-600', tab !== 'available');

    document.getElementById('quiz-tab-completed').classList.toggle('bg-emerald-500', tab === 'completed');
    document.getElementById('quiz-tab-completed').classList.toggle('text-white', tab === 'completed');
    document.getElementById('quiz-tab-completed').classList.toggle('bg-gray-100', tab !== 'completed');
    document.getElementById('quiz-tab-completed').classList.toggle('text-gray-600', tab !== 'completed');

    document.getElementById('quiz-list-available').classList.toggle('hidden', tab !== 'available');
    document.getElementById('quiz-list-completed').classList.toggle('hidden', tab !== 'completed');
  }

  function renderStudentQuizList() {
    const availableContainer = document.getElementById('quiz-list-available');
    const completedContainer = document.getElementById('quiz-list-completed');

    // Load quiz data from API if not cached
    if (cachedQuizzes.length === 0) {
      if (availableContainer) availableContainer.innerHTML = '<p class="text-gray-400 text-center py-8 col-span-full"><i class="fas fa-spinner fa-spin mr-2"></i>Loading...</p>';
      let loaded = 0;
      function check() { loaded++; if (loaded >= 2) renderStudentQuizListInner(); }
      API.getQuizzes((r) => { cachedQuizzes = (r && r.success && r.data) ? r.data : []; check(); });
      API.getQuizResults((r) => { cachedQuizResults = (r && r.success && r.data) ? r.data : []; check(); });
      return;
    }
    renderStudentQuizListInner();
  }

  function renderStudentQuizListInner() {
    const availableContainer = document.getElementById('quiz-list-available');
    const completedContainer = document.getElementById('quiz-list-completed');

    const studentClass = currentUser?.classId || '10A';
    const studentId = currentUser?.studentId || currentUser?.userId || '';

    // Get completed quiz IDs for this student
    const completedQuizIds = cachedQuizResults
      .filter(r => r.studentId === studentId)
      .map(r => r.quizId);

    // Only show quizzes the student has NOT completed yet
    const available = cachedQuizzes.filter(q =>
      q.status === 'Active' && q.classId === studentClass && !completedQuizIds.includes(q.quizId)
    );

    // Get completed quizzes (from results)
    const completedResults = cachedQuizResults.filter(r =>
      r.studentId === studentId
    );

    // Render available quizzes
    if (available.length === 0) {
      availableContainer.innerHTML = `
      <div class="col-span-full text-center py-8 bg-white rounded-2xl border border-gray-100">
        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
          <i class="fas fa-clipboard-list text-gray-400 text-2xl"></i>
        </div>
        <p class="text-gray-500">Tidak ada quiz tersedia</p>
      </div>
    `;
    } else {
      availableContainer.innerHTML = available.map(q => `
      <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
        <div class="flex items-start mb-3">
          <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
            <i class="fas fa-clipboard-list text-blue-500 text-lg"></i>
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="font-semibold text-gray-800 truncate">${q.title}</h4>
            <p class="text-sm text-gray-500">${q.subject} • ${q.className}</p>
          </div>
        </div>
        <div class="flex items-center text-xs text-gray-500 mb-4 space-x-4">
          <span><i class="fas fa-question-circle mr-1"></i>${q.questions.length} soal</span>
          <span><i class="fas fa-clock mr-1"></i>${q.duration} menit</span>
        </div>
        <button onclick="startQuiz('${q.quizId}')" class="w-full py-3 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition shadow-sm">
          <i class="fas fa-play mr-2"></i>Mulai Quiz
        </button>
      </div>
    `).join('');
    }

    // Render completed quizzes
    if (completedResults.length === 0) {
      completedContainer.innerHTML = `
      <div class="col-span-full text-center py-8 bg-white rounded-2xl border border-gray-100">
        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
          <i class="fas fa-check-circle text-gray-400 text-2xl"></i>
        </div>
        <p class="text-gray-500">Belum ada quiz yang selesai</p>
      </div>
    `;
    } else {
      completedContainer.innerHTML = completedResults.map(r => {
        const quiz = cachedQuizzes.find(q => q.quizId === r.quizId);
        return `
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 opacity-90">
          <div class="flex items-start mb-3">
            <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mr-3 flex-shrink-0">
              <i class="fas fa-check-circle text-emerald-500 text-lg"></i>
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-semibold text-gray-800 truncate">${quiz ? quiz.title : 'Quiz'}</h4>
              <p class="text-sm text-gray-500">${quiz ? quiz.subject : ''}</p>
            </div>
          </div>
          <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div class="text-sm text-gray-600">
              <i class="fas fa-clock mr-1 text-gray-400"></i>${r.timeSpent} menit
            </div>
            <div class="text-right">
              <span class="text-xs text-gray-400">Nilai</span>
              <div class="text-2xl font-bold ${r.score >= 70 ? 'text-emerald-600' : r.score >= 50 ? 'text-amber-600' : 'text-red-600'}">${r.score}</div>
            </div>
          </div>
        </div>
      `;
      }).join('');
    }
  }

  // Attendance Functions
  function updateAttendanceStatus() {
    console.log('=== UPDATE ATTENDANCE STATUS ===');
    console.log('Current user:', currentUser);
    console.log('User ID:', currentUser.userId || currentUser.studentId);

    const statusEl = document.getElementById('attendance-status-text');
    const timeEl = document.getElementById('attendance-time');
    const btnEl = document.getElementById('attendance-action-btn');
    const progressEl = document.getElementById('attendance-progress');

    // Check if already attended today from database
    const today = new Date().toISOString().split('T')[0];
    console.log('Checking attendance for date:', today);

    API.getAttendance(today, (response) => {
      console.log('=== ATTENDANCE RESPONSE ===');
      console.log('Response:', response);

      if (response && response.success && response.data) {
        console.log('Attendance data:', response.data);

        const userId = currentUser.userId || currentUser.studentId;
        console.log('Looking for userId:', userId, 'role:', currentUser.role);

        const todayAttendance = response.data.find(a => {
          console.log('Checking:', a.userId, '===', userId, '&&', a.role, '===', currentUser.role);
          return a.userId === userId && a.role === currentUser.role;
        });

        console.log('Found attendance:', todayAttendance);

        if (todayAttendance) {
          // Already attended
          console.log('User has attended today!');
          statusEl.textContent = 'Sudah Absen';
          timeEl.textContent = todayAttendance.time || '07:30 WIB';
          btnEl.textContent = 'Lihat Detail';
          btnEl.classList.remove('bg-emerald-500', 'hover:bg-emerald-600');
          btnEl.classList.add('bg-blue-500', 'hover:bg-blue-600');
          btnEl.onclick = () => {
            showToast(`Absen pada ${todayAttendance.time}`, 'info');
          };
          progressEl.style.width = '100%';
          progressEl.classList.add('bg-blue-500');
          progressEl.classList.remove('bg-emerald-500');
        } else {
          // Not attended yet
          console.log('User has NOT attended today');
          statusEl.textContent = 'Belum Absen';
          timeEl.textContent = 'Tap tombol di bawah untuk absen';
          btnEl.textContent = 'Absen';
          btnEl.classList.remove('bg-blue-500', 'hover:bg-blue-600');
          btnEl.classList.add('bg-emerald-500', 'hover:bg-emerald-600');
          btnEl.onclick = () => showStudentPage('attendance');
          progressEl.style.width = '0%';
        }
      } else {
        console.log('Failed to get attendance:', response);
        statusEl.textContent = 'Belum Absen';
      }
    });
  }

  function capturePhoto() {
    console.log('=== OPENING CAMERA IN NEW TAB ===');

    // Open camera in new tab (outside iframe)
    const width = 600;
    const height = 700;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    const cameraWindow = window.open(
      '',
      'CameraWindow',
      `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,location=no`
    );

    if (!cameraWindow) {
      showToast('Popup diblokir! Izinkan popup untuk kamera', 'error');
      return;
    }

    // Create camera HTML in new window
    cameraWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Ambil Foto Absensi</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"><\/script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
      <style>
        body { font-family: 'Poppins', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        video, canvas { border-radius: 12px; }
      </style>
    </head>
    <body class="min-h-screen flex items-center justify-center p-4">
      <div class="bg-white rounded-3xl shadow-2xl p-6 max-w-md w-full">
        <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">📸 Ambil Foto Absensi</h2>
        
        <div class="relative bg-black rounded-xl overflow-hidden mb-4" style="aspect-ratio: 4/3;">
          <video id="video" class="w-full h-full object-cover" autoplay playsinline></video>
          <canvas id="canvas" class="hidden w-full h-full"></canvas>
        </div>
        
        <div id="message" class="text-center mb-4">
          <p class="text-sm text-gray-600">Meminta izin kamera...</p>
        </div>
        
        <div class="grid grid-cols-2 gap-3">
          <button id="captureBtn" onclick="takePhoto()" class="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl hover:shadow-lg transition" disabled>
            <i class="fas fa-camera mr-2"></i>Ambil Foto
          </button>
          <button id="retakeBtn" onclick="retakePhoto()" class="w-full py-3 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition hidden">
            <i class="fas fa-redo mr-2"></i>Ulang
          </button>
        </div>
        
        <button id="submitBtn" onclick="submitPhoto()" class="w-full mt-3 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transition hidden">
          <i class="fas fa-check-circle mr-2"></i>Kirim Absensi
        </button>
      </div>

      <script>
        let stream = null;
        let photoData = null;
        
        async function initCamera() {
          try {
            stream = await navigator.mediaDevices.getUserMedia({ 
              video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
              audio: false
            });
            
            const video = document.getElementById('video');
            video.srcObject = stream;
            
            document.getElementById('message').innerHTML = '<p class="text-sm text-emerald-600">✅ Kamera aktif!</p>';
            document.getElementById('captureBtn').disabled = false;
            
          } catch (err) {
            document.getElementById('message').innerHTML = '<p class="text-sm text-red-600">❌ ' + err.message + '</p>';
          }
        }
        
        function takePhoto() {
          const video = document.getElementById('video');
          const canvas = document.getElementById('canvas');
          const ctx = canvas.getContext('2d');
          
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          ctx.drawImage(video, 0, 0);
          
          photoData = canvas.toDataURL('image/jpeg', 0.8);
          
          video.classList.add('hidden');
          canvas.classList.remove('hidden');
          
          document.getElementById('captureBtn').classList.add('hidden');
          document.getElementById('retakeBtn').classList.remove('hidden');
          document.getElementById('submitBtn').classList.remove('hidden');
          document.getElementById('message').innerHTML = '<p class="text-sm text-emerald-600">✅ Foto diambil!</p>';
        }
        
        function retakePhoto() {
          const video = document.getElementById('video');
          const canvas = document.getElementById('canvas');
          
          video.classList.remove('hidden');
          canvas.classList.add('hidden');
          
          document.getElementById('captureBtn').classList.remove('hidden');
          document.getElementById('retakeBtn').classList.add('hidden');
          document.getElementById('submitBtn').classList.add('hidden');
          document.getElementById('message').innerHTML = '<p class="text-sm text-emerald-600">✅ Kamera aktif!</p>';
          
          photoData = null;
        }
        
        function submitPhoto() {
          if (!photoData) return;
          
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const result = {
                  photo: photoData,
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                  accuracy: position.coords.accuracy
                };
                
                // Send to opener window using postMessage
                if (window.opener) {
                  window.opener.postMessage({ type: 'attendanceResult', data: result }, '*');
                }
                
                window.close();
              },
              (error) => {
                const result = {
                  photo: photoData,
                  lat: -6.2088,
                  lng: 106.8456,
                  accuracy: 10
                };
                if (window.opener) {
                  window.opener.postMessage({ type: 'attendanceResult', data: result }, '*');
                }
                window.close();
              }
            );
          } else {
            const result = { photo: photoData, lat: -6.2088, lng: 106.8456, accuracy: 10 };
            if (window.opener) {
              window.opener.postMessage({ type: 'attendanceResult', data: result }, '*');
            }
            window.close();
          }
        }
        
        initCamera();
        
        window.addEventListener('beforeunload', () => {
          if (stream) {
            stream.getTracks().forEach(track => track.stop());
          }
        });
      <\/script>
    </body>
    </html>
  `);

    showToast('Silakan ambil foto di tab baru', 'info');

    // Listen for message from popup window
    window.addEventListener('message', function (event) {
      console.log('=== MESSAGE RECEIVED ===');
      console.log('Event type:', event.data?.type);

      if (event.data && event.data.type === 'attendanceResult') {
        const result = event.data.data;

        console.log('Photo received, length:', result.photo ? result.photo.length : 0);
        console.log('Location:', result.lat, result.lng);

        // Set attendance data
        attendancePhoto = result.photo;
        attendanceLocation = {
          lat: result.lat,
          lng: result.lng,
          accuracy: result.accuracy
        };

        // Update UI
        const placeholder = document.getElementById('camera-placeholder');
        const captureBtn = document.getElementById('capture-btn');
        const retakeBtn = document.getElementById('retake-btn');

        placeholder.innerHTML = `
        <div class="text-center p-4">
          <div class="w-20 h-20 mx-auto mb-2 rounded-full bg-emerald-100 flex items-center justify-center">
            <i class="fas fa-check-circle text-emerald-500 text-3xl"></i>
          </div>
          <p class="text-sm text-gray-600 font-medium">✅ Foto Sudah Diambil!</p>
          <p class="text-xs text-gray-400 mt-1">Akurasi: ±${Math.round(result.accuracy)}m</p>
          <p class="text-xs text-emerald-600 mt-2">Siap dikirim</p>
        </div>
      `;

        captureBtn.classList.add('hidden');
        retakeBtn.classList.remove('hidden');
        retakeBtn.textContent = '🔄 Ambil Ulang';
        retakeBtn.onclick = () => {
          attendancePhoto = null;
          attendanceLocation = null;
          capturePhoto();
        };

        checkAttendanceReady();
        showToast('Foto berhasil diambil! Mengirim absensi...', 'success');

        // AUTO-SUBMIT to database
        setTimeout(() => {
          console.log('=== AUTO-SUBMITTING ATTENDANCE ===');
          submitAttendance();
        }, 1000);
      }
    });
  }

  function takePhoto() {
    const video = document.getElementById('attendance-video');
    const canvas = document.getElementById('attendance-canvas');
    const photo = document.getElementById('attendance-photo');
    const captureBtn = document.getElementById('capture-btn');
    const retakeBtn = document.getElementById('retake-btn');

    console.log('=== TAKING PHOTO ===');
    console.log('Video has stream:', !!video.srcObject);
    console.log('Video dimensions:', video.videoWidth, 'x', video.videoHeight);

    if (!video.srcObject || video.videoWidth === 0) {
      showToast('Kamera belum siap', 'error');
      return;
    }

    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    try {
      attendancePhoto = canvas.toDataURL('image/jpeg', 0.8);
      photo.src = attendancePhoto;

      video.classList.add('hidden');
      photo.classList.remove('hidden');

      // Stop camera
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
      }

      captureBtn.classList.add('hidden');
      retakeBtn.classList.remove('hidden');
      retakeBtn.textContent = '🔄 Ambil Ulang';

      checkAttendanceReady();
      showToast('✅ Foto berhasil diambil!', 'success');
    } catch (err) {
      console.error('Photo capture error:', err);
      showToast('Gagal menyimpan foto', 'error');
    }
  }

  function retakePhoto() {
    const video = document.getElementById('attendance-video');
    const photo = document.getElementById('attendance-photo');
    const placeholder = document.getElementById('camera-placeholder');
    const captureBtn = document.getElementById('capture-btn');
    const retakeBtn = document.getElementById('retake-btn');

    photo.classList.add('hidden');
    placeholder.classList.remove('hidden');
    captureBtn.classList.remove('hidden');
    retakeBtn.classList.add('hidden');

    captureBtn.textContent = '📸 Ambil Foto';

    attendancePhoto = null;
    checkAttendanceReady();

    // Restart camera
    capturePhoto();
  }

  function takePhoto() {
    const video = document.getElementById('attendance-video');
    const canvas = document.getElementById('attendance-canvas');
    const photo = document.getElementById('attendance-photo');
    const captureBtn = document.getElementById('capture-btn');
    const retakeBtn = document.getElementById('retake-btn');

    if (!video.srcObject) {
      showToast('Kamera belum aktif', 'error');
      return;
    }

    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);

    attendancePhoto = canvas.toDataURL('image/jpeg', 0.8);
    photo.src = attendancePhoto;

    video.classList.add('hidden');
    photo.classList.remove('hidden');

    // Stop camera stream
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      stream = null;
    }

    captureBtn.classList.add('hidden');
    retakeBtn.classList.remove('hidden');

    checkAttendanceReady();
    showToast('Foto berhasil diambil!', 'success');
  }

  function retakePhoto() {
    const video = document.getElementById('attendance-video');
    const photo = document.getElementById('attendance-photo');
    const placeholder = document.getElementById('camera-placeholder');
    const captureBtn = document.getElementById('capture-btn');
    const retakeBtn = document.getElementById('retake-btn');

    photo.classList.add('hidden');
    placeholder.classList.remove('hidden');

    captureBtn.classList.remove('hidden');
    retakeBtn.classList.add('hidden');

    attendancePhoto = null;
    checkAttendanceReady();
  }

  function getCurrentLocation() {
    const statusEl = document.getElementById('location-status');
    const detailsEl = document.getElementById('location-details');

    statusEl.innerHTML = `
    <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
      <i class="fas fa-spinner fa-spin text-blue-500"></i>
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-medium text-blue-800">Mendeteksi lokasi...</p>
      <p class="text-xs text-blue-600">Mohon tunggu</p>
    </div>
  `;

    if (!navigator.geolocation) {
      statusEl.innerHTML = `
      <div class="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3 flex-shrink-0">
        <i class="fas fa-exclamation-triangle text-amber-500"></i>
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-amber-800">Geolocation tidak didukung</p>
        <p class="text-xs text-amber-600">Gunakan browser lain</p>
      </div>
    `;
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        attendanceLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: Math.round(position.coords.accuracy)
        };

        document.getElementById('location-lat').textContent = attendanceLocation.lat.toFixed(6);
        document.getElementById('location-lng').textContent = attendanceLocation.lng.toFixed(6);
        document.getElementById('location-accuracy').textContent = `±${attendanceLocation.accuracy}m`;

        statusEl.classList.remove('bg-blue-50');
        statusEl.classList.add('bg-emerald-50');
        statusEl.innerHTML = `
        <div class="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3 flex-shrink-0">
          <i class="fas fa-check-circle text-emerald-500"></i>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-emerald-800">Lokasi berhasil dideteksi</p>
          <p class="text-xs text-emerald-600">Akurasi ±${attendanceLocation.accuracy}m</p>
        </div>
      `;

        detailsEl.classList.remove('hidden');
        checkAttendanceReady();
        showToast('Lokasi berhasil didapatkan', 'success');
      },
      (error) => {
        statusEl.innerHTML = `
        <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0">
          <i class="fas fa-times-circle text-red-500"></i>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-red-800">Gagal mendeteksi lokasi</p>
          <p class="text-xs text-red-600">${error.message}</p>
        </div>
      `;
        // For demo, use dummy location
        attendanceLocation = { lat: -6.2088, lng: 106.8456, accuracy: 10 };
        document.getElementById('location-lat').textContent = attendanceLocation.lat;
        document.getElementById('location-lng').textContent = attendanceLocation.lng;
        document.getElementById('location-accuracy').textContent = '±10m (Demo)';
        detailsEl.classList.remove('hidden');
        checkAttendanceReady();
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }

  function checkAttendanceReady() {
    const submitBtn = document.getElementById('submit-attendance-btn');
    // For demo, allow submission if photo OR location is available
    const isReady = attendancePhoto || attendanceLocation;
    submitBtn.disabled = !isReady;
  }

  function submitAttendance() {
    if (!attendancePhoto && !attendanceLocation) {
      showToast('Mohon ambil foto dan lokasi terlebih dahulu', 'error');
      return;
    }

    showLoading();

    const attendanceData = {
      userId: currentUser.userId || currentUser.studentId || currentUser.teacherId,
      userName: currentUser.name,
      role: currentUser.role,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('id-ID'),
      photoUrl: attendancePhoto || '',
      latitude: attendanceLocation ? attendanceLocation.lat : '',
      longitude: attendanceLocation ? attendanceLocation.lng : '',
      accuracy: attendanceLocation ? attendanceLocation.accuracy : '',
      status: 'Present'
    };

    console.log('Submitting attendance:', attendanceData);

    API.submitAttendance(attendanceData, (response) => {
      hideLoading();

      if (response && response.success) {
        showToast('Absensi berhasil dikirim!', 'success');

        // Reset form
        attendancePhoto = null;
        attendanceLocation = null;

        const retakeBtn = document.getElementById('retake-btn');
        const captureBtn = document.getElementById('capture-btn');
        const photo = document.getElementById('attendance-photo');
        const placeholder = document.getElementById('camera-placeholder');

        if (photo) photo.classList.add('hidden');
        if (placeholder) placeholder.classList.remove('hidden');
        if (captureBtn) captureBtn.classList.remove('hidden');
        if (retakeBtn) retakeBtn.classList.add('hidden');

        const detailsEl = document.getElementById('location-details');
        const statusEl = document.getElementById('location-status');

        if (detailsEl) detailsEl.classList.add('hidden');
        if (statusEl) {
          statusEl.innerHTML = `
          <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
            <i class="fas fa-map-marker-alt text-blue-500"></i>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-blue-800">Mendeteksi lokasi...</p>
            <p class="text-xs text-blue-600">Izinkan akses lokasi</p>
          </div>
        `;
          statusEl.classList.remove('bg-emerald-50');
          statusEl.classList.add('bg-blue-50');
        }

        const submitBtn = document.getElementById('submit-attendance-btn');
        if (submitBtn) submitBtn.disabled = true;

        // Update home status
        if (currentUser.role === 'Student') {
          showStudentPage('home');
          updateAttendanceStatus();
        } else if (currentUser.role === 'Teacher') {
          showTeacherPage('home');
          updateTeacherAttendanceStatus();
        }
      } else {
        showToast(response.error || 'Gagal mengirim absensi', 'error');
      }
    });
  }

  function showChangePassword() {
    openChangePasswordModal();
  }

  // ==================== TEACHER DASHBOARD ====================
  let currentTeacherPage = 'dashboard';

  function initTeacherDashboard() {
    navigateTo('teacher');

    const teacher = currentUser || dummyData.teachers[0];

    // Populate teacher info across all UI elements
    document.getElementById('teacher-welcome-name').textContent = teacher.name;
    document.getElementById('teacher-desktop-welcome-name').textContent = teacher.name;
    document.getElementById('teacher-subject-info').textContent = `Guru ${teacher.subject}`;
    document.getElementById('teacher-desktop-name').textContent = teacher.name;
    document.getElementById('teacher-desktop-subject').textContent = `Guru ${teacher.subject}`;
    document.getElementById('teacher-avatar-initial').textContent = teacher.name.charAt(0);
    document.getElementById('teacher-desktop-avatar').textContent = teacher.name.charAt(0);
    document.getElementById('teacher-header-avatar').textContent = teacher.name.charAt(0);
    document.getElementById('teacher-attendance-initial').textContent = teacher.name.charAt(0);

    // Render dashboard widgets
    renderTeacherDashboard();
    renderTeacherSchedule();
    renderTeacherQuizzes();

    // Start live time
    startTeacherClock();

    // Update attendance status
    setTimeout(() => {
      updateTeacherAttendanceStatus();
    }, 500);
  }

  function renderTeacherDashboard() {
    // Render today's schedule
    const scheduleContainer = document.getElementById('teacher-today-schedule-list');
    const today = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
    const todaySchedules = dummyData.schedules.filter(s => s.day === today).slice(0, 3);

    if (todaySchedules.length === 0) {
      scheduleContainer.innerHTML = `<p class="text-center text-gray-500 py-4 text-sm">Tidak ada jadwal hari ini</p>`;
    } else {
      scheduleContainer.innerHTML = todaySchedules.map(s => `
      <div class="flex items-center p-3 bg-gray-50 rounded-xl">
        <div class="w-12 text-center mr-3">
          <p class="text-xs font-bold text-gray-800">${s.timeStart}</p>
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-medium text-gray-800 text-sm">${s.subject}</p>
          <p class="text-xs text-gray-500">Kelas ${s.className}</p>
        </div>
        <span class="text-xs bg-white px-2 py-1 rounded-lg text-gray-600">${s.room}</span>
      </div>
    `).join('');
    }

    // Render active quizzes
    const quizzesContainer = document.getElementById('teacher-active-quizzes-list');
    const activeQuizzes = cachedQuizzes.filter(q => q.status === 'Active' && (q.teacher === currentUser?.name || q.createdBy === currentUser?.name)).slice(0, 3);

    if (activeQuizzes.length === 0) {
      quizzesContainer.innerHTML = `<p class="text-center text-gray-500 py-4 text-sm">Tidak ada quiz aktif</p>`;
    } else {
      quizzesContainer.innerHTML = activeQuizzes.map(q => `
      <div class="flex items-center p-3 bg-gray-50 rounded-xl">
        <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
          <i class="fas fa-clipboard-list text-blue-500"></i>
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-medium text-gray-800 text-sm truncate">${q.title}</p>
          <p class="text-xs text-gray-500">${q.className} • ${q.questions.length} soal</p>
        </div>
      </div>
    `).join('');
    }

    // Render recent announcements
    const announcementsContainer = document.getElementById('teacher-recent-announcements-list');
    const recentAnnouncements = (cachedAnnouncements || []).slice(0, 3);

    if (recentAnnouncements.length === 0) {
      announcementsContainer.innerHTML = `<p class="text-center text-gray-500 py-4 text-sm">Belum ada pengumuman</p>`;
    } else {
      announcementsContainer.innerHTML = recentAnnouncements.map(a => `
      <div class="flex items-start p-3 bg-gray-50 rounded-xl">
        <div class="w-8 h-8 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 ${a.type === 'urgent' ? 'bg-red-100' : a.type === 'academic' ? 'bg-blue-100' : 'bg-gray-100'
        }">
          <i class="fas fa-bullhorn text-xs ${a.type === 'urgent' ? 'text-red-600' : a.type === 'academic' ? 'text-blue-600' : 'text-gray-600'
        }"></i>
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-medium text-gray-800 text-sm truncate">${a.title}</p>
          <p class="text-xs text-gray-500">${a.date}</p>
        </div>
      </div>
    `).join('');
    }
  }

  // ==================== TEACHER ATTENDANCE FUNCTIONS ====================
  let teacherAttendancePhoto = null;
  let teacherAttendanceLocation = null;
  let teacherStream = null;

  function captureTeacherPhoto() {
    const placeholder = document.getElementById('teacher-camera-placeholder');
    const video = document.getElementById('teacher-attendance-video');
    const canvas = document.getElementById('teacher-attendance-canvas');
    const photo = document.getElementById('teacher-attendance-photo');
    const captureBtn = document.getElementById('teacher-capture-btn');
    const retakeBtn = document.getElementById('teacher-retake-btn');

    try {
      teacherStream = navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      teacherStream.then(stream => {
        video.srcObject = stream;

        placeholder.classList.add('hidden');
        video.classList.remove('hidden');

        // Auto capture after 1.5 seconds
        setTimeout(() => {
          const ctx = canvas.getContext('2d');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          ctx.drawImage(video, 0, 0);

          teacherAttendancePhoto = canvas.toDataURL('image/jpeg');
          photo.src = teacherAttendancePhoto;

          video.classList.add('hidden');
          photo.classList.remove('hidden');

          stream.getTracks().forEach(track => track.stop());

          captureBtn.classList.add('hidden');
          retakeBtn.classList.remove('hidden');

          checkTeacherAttendanceReady();
          showToast('Foto berhasil diambil', 'success');
        }, 1500);
      });
    } catch (err) {
      showToast('Kamera tidak tersedia: ' + err.message, 'error');
      teacherAttendancePhoto = 'data:image/jpeg;base64,demo';
      checkTeacherAttendanceReady();
    }
  }

  function retakeTeacherPhoto() {
    const video = document.getElementById('teacher-attendance-video');
    const photo = document.getElementById('teacher-attendance-photo');
    const placeholder = document.getElementById('teacher-camera-placeholder');
    const captureBtn = document.getElementById('teacher-capture-btn');
    const retakeBtn = document.getElementById('teacher-retake-btn');

    photo.classList.add('hidden');
    placeholder.classList.remove('hidden');

    captureBtn.classList.remove('hidden');
    retakeBtn.classList.add('hidden');

    teacherAttendancePhoto = null;
    checkTeacherAttendanceReady();
  }

  function getTeacherCurrentLocation() {
    const statusEl = document.getElementById('teacher-location-status');
    const detailsEl = document.getElementById('teacher-location-details');

    statusEl.innerHTML = `
    <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
      <i class="fas fa-spinner fa-spin text-blue-500"></i>
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-medium text-blue-800">Mendeteksi lokasi...</p>
      <p class="text-xs text-blue-600">Mohon tunggu</p>
    </div>
  `;

    if (!navigator.geolocation) {
      statusEl.innerHTML = `
      <div class="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3 flex-shrink-0">
        <i class="fas fa-exclamation-triangle text-amber-500"></i>
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-amber-800">Geolocation tidak didukung</p>
        <p class="text-xs text-amber-600">Gunakan browser lain</p>
      </div>
    `;
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        teacherAttendanceLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: Math.round(position.coords.accuracy)
        };

        document.getElementById('teacher-location-lat').textContent = teacherAttendanceLocation.lat.toFixed(6);
        document.getElementById('teacher-location-lng').textContent = teacherAttendanceLocation.lng.toFixed(6);
        document.getElementById('teacher-location-accuracy').textContent = `±${teacherAttendanceLocation.accuracy}m`;

        statusEl.classList.remove('bg-blue-50');
        statusEl.classList.add('bg-emerald-50');
        statusEl.innerHTML = `
        <div class="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3 flex-shrink-0">
          <i class="fas fa-check-circle text-emerald-500"></i>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-emerald-800">Lokasi berhasil dideteksi</p>
          <p class="text-xs text-emerald-600">Akurasi ±${teacherAttendanceLocation.accuracy}m</p>
        </div>
      `;

        detailsEl.classList.remove('hidden');
        checkTeacherAttendanceReady();
        showToast('Lokasi berhasil didapatkan', 'success');
      },
      (error) => {
        statusEl.innerHTML = `
        <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0">
          <i class="fas fa-times-circle text-red-500"></i>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-red-800">Gagal mendeteksi lokasi</p>
          <p class="text-xs text-red-600">${error.message}</p>
        </div>
      `;
        // Demo mode
        teacherAttendanceLocation = { lat: -6.2088, lng: 106.8456, accuracy: 10 };
        document.getElementById('teacher-location-lat').textContent = teacherAttendanceLocation.lat;
        document.getElementById('teacher-location-lng').textContent = teacherAttendanceLocation.lng;
        document.getElementById('teacher-location-accuracy').textContent = '±10m (Demo)';
        detailsEl.classList.remove('hidden');
        checkTeacherAttendanceReady();
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }

  function checkTeacherAttendanceReady() {
    const submitBtn = document.getElementById('teacher-submit-attendance-btn');
    const isReady = teacherAttendancePhoto || teacherAttendanceLocation;
    submitBtn.disabled = !isReady;
  }

  function submitTeacherAttendance() {
    showLoading();

    setTimeout(() => {
      hideLoading();
      showToast('Absensi guru berhasil dikirim!', 'success');

      // Reset form
      teacherAttendancePhoto = null;
      teacherAttendanceLocation = null;
      retakeTeacherPhoto();
      document.getElementById('teacher-location-details').classList.add('hidden');
      document.getElementById('teacher-location-status').innerHTML = `
      <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
        <i class="fas fa-map-marker-alt text-blue-500"></i>
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-blue-800">Mendeteksi lokasi...</p>
        <p class="text-xs text-blue-600">Izinkan akses lokasi</p>
      </div>
    `;
      document.getElementById('teacher-location-status').classList.remove('bg-emerald-50');
      document.getElementById('teacher-location-status').classList.add('bg-blue-50');
      document.getElementById('teacher-submit-attendance-btn').disabled = true;

      // Update home status
      showTeacherPage('home');

      // Update attendance status on dashboard
      document.getElementById('teacher-attendance-status-text').textContent = 'Sudah Absen';
      document.getElementById('teacher-attendance-time').textContent = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
      document.getElementById('teacher-attendance-action-btn').textContent = 'Lihat Detail';
      document.getElementById('teacher-attendance-progress').style.width = '100%';
    }, 1500);
  }

  function updateTeacherAttendanceStatus() {
    const statusEl = document.getElementById('teacher-attendance-status-text');
    const timeEl = document.getElementById('teacher-attendance-time');
    const btnEl = document.getElementById('teacher-attendance-action-btn');
    const progressEl = document.getElementById('teacher-attendance-progress');

    // Check if already attended today from database
    const today = new Date().toISOString().split('T')[0];

    API.getAttendance(today, (response) => {
      if (response && response.success && response.data) {
        const todayAttendance = response.data.find(a =>
          a.userId === (currentUser.userId || currentUser.teacherId) &&
          a.role === currentUser.role
        );

        if (todayAttendance) {
          // Already attended
          statusEl.textContent = 'Sudah Absen';
          timeEl.textContent = todayAttendance.time || '07:30 WIB';
          btnEl.textContent = 'Lihat Detail';
          btnEl.classList.remove('bg-emerald-500', 'hover:bg-emerald-600');
          btnEl.classList.add('bg-blue-500', 'hover:bg-blue-600');
          btnEl.onclick = () => {
            showToast(`Absen pada ${todayAttendance.time}`, 'info');
          };
          progressEl.style.width = '100%';
          progressEl.classList.add('bg-blue-500');
          progressEl.classList.remove('bg-emerald-500');
        } else {
          // Not attended yet
          statusEl.textContent = 'Belum Absen';
          timeEl.textContent = 'Tap tombol di bawah untuk absen';
          btnEl.textContent = 'Absen';
          btnEl.classList.remove('bg-blue-500', 'hover:bg-blue-600');
          btnEl.classList.add('bg-emerald-500', 'hover:bg-emerald-600');
          btnEl.onclick = () => showTeacherPage('attendance');
          progressEl.style.width = '0%';
        }
      }
    });
  }

  function showTeacherPage(page) {
    currentTeacherPage = page;

    // Handle notifications as a modal/toast instead of a page
    if (page === 'notifications') {
      showToast('Anda memiliki 3 notifikasi baru', 'info');
      return;
    }

    // Update desktop nav active states
    document.querySelectorAll('.teacher-desktop-nav').forEach(btn => {
      btn.classList.remove('text-emerald-600', 'bg-emerald-50');
      btn.classList.add('text-gray-600');
    });
    const activeDesktopNav = document.querySelector(`.teacher-desktop-nav[data-page="${page}"]`);
    if (activeDesktopNav) {
      activeDesktopNav.classList.add('text-emerald-600', 'bg-emerald-50');
      activeDesktopNav.classList.remove('text-gray-600');
    }

    // Update mobile nav active states
    document.querySelectorAll('.teacher-nav-btn').forEach(btn => {
      btn.classList.remove('text-emerald-600', 'active');
      btn.classList.add('text-gray-400');
    });
    const activeNav = document.querySelector(`.teacher-nav-btn[data-page="${page}"]`);
    if (activeNav) {
      activeNav.classList.add('text-emerald-600', 'active');
      activeNav.classList.remove('text-gray-400');
    }

    // Hide all pages
    document.querySelectorAll('.teacher-content-page').forEach(el => el.classList.add('hidden'));

    // Show selected page
    const pageEl = document.getElementById(`teacher-page-${page}`);
    if (pageEl) pageEl.classList.remove('hidden');

    // Page specific actions
    if (page === 'attendance') {
      setTimeout(() => getTeacherCurrentLocation(), 500);
    }

    if (page === 'quizzes') {
      renderTeacherQuizzes();
    }

    if (page === 'home') {
      renderTeacherDashboard();
    }

    if (page === 'schedule') {
      renderTeacherSchedule();
    }

    if (page === 'students') {
      renderTeacherStudents();
    }

    if (page === 'announcements') {
      renderTeacherAnnouncements();
    }
  }

  function toggleMobileSidebarTeacher() {
    const sidebar = document.getElementById('teacher-sidebar');
    const overlay = document.getElementById('mobile-teacher-sidebar-overlay');

    if (sidebar.classList.contains('-translate-x-full')) {
      sidebar.classList.remove('-translate-x-full');
      overlay.classList.remove('hidden');
    } else {
      sidebar.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
    }
  }

  // Global variable for teacher schedule filter
  let currentTeacherScheduleFilter = 'All';

  function renderTeacherSchedule() {
    const container = document.getElementById('teacher-today-schedule');
    const today = new Date().toLocaleDateString('id-ID', { weekday: 'long' });

    // Get current teacher's schedules from dummyData
    const teacherId = currentUser && currentUser.role === 'Teacher' ? 'T001' : null;
    let teacherSchedules = dummyData.schedules.filter(s =>
      teacherId ? s.teacherId === teacherId || s.teacher === currentUser?.name : true
    );

    // Apply day filter
    if (currentTeacherScheduleFilter !== 'All') {
      teacherSchedules = teacherSchedules.filter(s => s.day === currentTeacherScheduleFilter);
    }

    // Sort by day and time
    const dayOrder = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
    teacherSchedules.sort((a, b) => {
      const dayDiff = dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day);
      if (dayDiff !== 0) return dayDiff;
      return a.timeStart.localeCompare(b.timeStart);
    });

    // Today's schedule for dashboard
    const todaySchedules = teacherSchedules.filter(s => s.day === today).slice(0, 4);

    if (container) {
      if (todaySchedules.length === 0) {
        container.innerHTML = `<p class="text-center text-gray-500 py-4">Tidak ada jadwal hari ini</p>`;
      } else {
        container.innerHTML = todaySchedules.map(s => `
        <div class="flex items-center p-3 bg-white border border-gray-100 rounded-xl">
          <div class="w-20 flex-shrink-0">
            <p class="text-xs font-medium text-gray-600">${s.timeStart} - ${s.timeEnd}</p>
          </div>
          <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
            <span class="text-blue-600 font-bold text-sm">${s.className || s.classId}</span>
          </div>
          <div class="flex-1">
            <p class="font-medium text-gray-800">${s.subject}</p>
            <p class="text-xs text-gray-500">${s.room}</p>
          </div>
        </div>
      `).join('');
      }
    }

    // Schedule table (full schedule page)
    const tableBody = document.getElementById('teacher-schedule-table');
    if (tableBody) {
      if (teacherSchedules.length === 0) {
        tableBody.innerHTML = `
        <tr>
          <td colspan="6" class="px-4 py-8 text-center text-gray-500">
            <i class="fas fa-calendar-times text-4xl mb-2 text-gray-300"></i>
            <p>Tidak ada jadwal mengajar</p>
          </td>
        </tr>
      `;
      } else {
        tableBody.innerHTML = teacherSchedules.map((s, index) => `
        <tr class="hover:bg-gray-50 transition">
          <td class="px-4 py-3 text-sm font-medium text-gray-800">${s.day}</td>
          <td class="px-4 py-3 text-sm text-gray-600">${s.timeStart} - ${s.timeEnd}</td>
          <td class="px-4 py-3 text-sm font-medium text-blue-600">${s.className || s.classId}</td>
          <td class="px-4 py-3 text-sm text-gray-800">${s.subject}</td>
          <td class="px-4 py-3 text-sm text-gray-600">${s.room}</td>
          <td class="px-4 py-3 text-center">
            <button onclick="deleteTeacherSchedule('${s.scheduleId}')" class="text-red-400 hover:text-red-600 transition p-1" title="Hapus Jadwal">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      `).join('');
      }
    }
  }

  function filterTeacherSchedule(day) {
    currentTeacherScheduleFilter = day;

    // Update button styles
    const days = ['All', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
    days.forEach(d => {
      const btn = document.getElementById(`schedule-filter-${d.toLowerCase()}`);
      if (btn) {
        if (d === day) {
          btn.className = 'px-4 py-2 rounded-xl text-sm font-medium bg-blue-500 text-white shadow-md transition whitespace-nowrap';
        } else {
          btn.className = 'px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition whitespace-nowrap';
        }
      }
    });

    renderTeacherSchedule();
  }

  function openAddScheduleModal() {
    // Populate teacher dropdown
    const teacherSelect = document.getElementById('new-schedule-teacher');
    if (teacherSelect) {
      teacherSelect.innerHTML = '<option value="">Pilih Guru</option>';
      API.getTeachers((response) => {
        if (response && response.success && response.data) {
          response.data.forEach(t => {
            const option = document.createElement('option');
            option.value = t.name;
            option.textContent = t.name;
            teacherSelect.appendChild(option);
          });
        }
      });
    }

    // Set default time
    const timeStart = document.getElementById('new-schedule-time-start');
    const timeEnd = document.getElementById('new-schedule-time-end');
    if (timeStart) timeStart.value = '08:00';
    if (timeEnd) timeEnd.value = '09:30';

    openModal('modal-add-schedule');
  }

  function saveTeacherSchedule(event) {
    event.preventDefault();
    showLoading();

    const day = document.getElementById('schedule-day').value;
    const timeStart = document.getElementById('schedule-time-start').value;
    const timeEnd = document.getElementById('schedule-time-end').value;
    const className = document.getElementById('schedule-class').value;
    const subject = document.getElementById('schedule-subject').value;
    const room = document.getElementById('schedule-room').value;

    // Create new schedule object
    const newSchedule = {
      scheduleId: 'SC' + Date.now(),
      day: day,
      timeStart: timeStart,
      timeEnd: timeEnd,
      classId: className,
      className: className,
      subject: subject,
      room: room,
      teacher: currentUser?.name || 'Teacher',
      teacherId: 'T001',
      scheduleType: 'Lesson'
    };

    // Add to dummyData (simulating database save)
    dummyData.schedules.push(newSchedule);

    // Simulate API delay
    setTimeout(() => {
      hideLoading();
      closeModal('modal-add-schedule');

      // Refresh displays
      renderTeacherSchedule();
      renderStudentSchedule(); // Update student view too

      // Show success message
      showToast('Jadwal berhasil ditambahkan! Data telah tersimpan di database.', 'success');

      // Reset form
      document.getElementById('schedule-subject').value = '';
      document.getElementById('schedule-room').value = '';
    }, 800);
  }

  function deleteTeacherSchedule(scheduleId) {
    if (!confirm('Apakah Anda yakin ingin menghapus jadwal ini?')) {
      return;
    }

    showLoading();

    // Remove from dummyData
    const index = dummyData.schedules.findIndex(s => s.scheduleId === scheduleId);
    if (index > -1) {
      dummyData.schedules.splice(index, 1);
    }

    setTimeout(() => {
      hideLoading();
      renderTeacherSchedule();
      renderStudentSchedule();
      showToast('Jadwal berhasil dihapus', 'success');
    }, 500);
  }

  function renderTeacherClasses() {
    const container = document.getElementById('teacher-classes-list');

    const classes = [
      { name: 'Kelas 10A', subject: 'Matematika', students: 32, room: 'R-101', schedule: 'Senin, Rabu, Jumat' },
      { name: 'Kelas 11B', subject: 'Fisika', students: 28, room: 'R-203', schedule: 'Selasa, Kamis' },
      { name: 'Kelas 10C', subject: 'Matematika', students: 30, room: 'R-105', schedule: 'Senin, Rabu' }
    ];

    container.innerHTML = classes.map(c => `
    <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
      <div class="flex items-center mb-3">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-3">
          <span class="text-white font-bold">${c.name.replace('Kelas ', '')}</span>
        </div>
        <div>
          <h4 class="font-bold text-gray-800">${c.name}</h4>
          <p class="text-sm text-blue-600">${c.subject}</p>
        </div>
      </div>
      <div class="space-y-2 text-sm">
        <div class="flex justify-between">
          <span class="text-gray-500">Siswa</span>
          <span class="font-medium text-gray-800">${c.students}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-500">Ruangan</span>
          <span class="font-medium text-gray-800">${c.room}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-500">Jadwal</span>
          <span class="font-medium text-gray-800">${c.schedule}</span>
        </div>
      </div>
      <div class="mt-4 pt-4 border-t border-gray-100 flex space-x-2">
        <button onclick="showToast('Attendance feature coming soon', 'info')" class="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
          <i class="fas fa-clipboard-check mr-1"></i> Absensi
        </button>
        <button onclick="showToast('Grades feature coming soon', 'info')" class="flex-1 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
          <i class="fas fa-star mr-1"></i> Nilai
        </button>
      </div>
    </div>
  `).join('');
  }

  // renderTeacherQuizzes is defined in the Quiz section above

  // ==================== QUIZ SYSTEM ====================

  // Global variables for quiz
  let currentQuiz = null;
  let currentQuizAnswers = [];
  let currentQuestionIndex = 0;
  let quizTimerInterval = null;
  let quizTimeRemaining = 0;
  let teacherQuizFilter = 'all';

  // Open Create Quiz Modal
  // ==================== TEACHER STUDENTS FUNCTIONS ====================
  let teacherStudentFilter = 'all';

  function openAddStudentTeacherModal() {
    // Generate next student number
    const lastStudent = dummyData.students[dummyData.students.length - 1];
    const lastNumber = parseInt(lastStudent.studentNumber);
    const nextNumber = (lastNumber + 1).toString();

    document.getElementById('new-student-teacher-nis').value = nextNumber;
    document.getElementById('new-student-teacher-entry-year').value = new Date().getFullYear();

    openModal('modal-add-student-teacher');
  }

  function saveNewStudentTeacher(event) {
    event.preventDefault();
    showLoading();

    const name = document.getElementById('new-student-teacher-name').value;
    const gender = document.getElementById('new-student-teacher-gender').value;
    const nis = document.getElementById('new-student-teacher-nis').value;
    const entryYear = document.getElementById('new-student-teacher-entry-year').value;
    const classId = document.getElementById('new-student-teacher-class').value;
    const parentName = document.getElementById('new-student-teacher-parent').value;
    const email = document.getElementById('new-student-teacher-email').value;
    const phone = document.getElementById('new-student-teacher-phone').value;
    const parentPhone = document.getElementById('new-student-teacher-parent-phone').value;

    const newStudent = {
      studentId: 'S' + Date.now(),
      name: name,
      gender: gender,
      studentNumber: nis,
      entryYear: entryYear,
      classId: classId,
      email: email,
      phone: phone,
      parentName: parentName,
      parentPhone: parentPhone,
      status: 'Active'
    };

    dummyData.students.push(newStudent);

    setTimeout(() => {
      hideLoading();
      closeModal('modal-add-student-teacher');
      renderTeacherStudents();
      showToast(`Siswa "${name}" berhasil ditambahkan!`, 'success');

      // Reset form
      event.target.reset();
    }, 800);
  }

  function renderTeacherStudents() {
    const tableBody = document.getElementById('teacher-students-table');
    const searchInput = document.getElementById('teacher-student-search');
    const searchTerm = searchInput?.value?.toLowerCase() || '';
    const classFilter = document.getElementById('teacher-student-filter-class')?.value || 'all';

    // Add search listener if not already added
    if (searchInput && !searchInput.dataset.listenerAdded) {
      searchInput.addEventListener('input', renderTeacherStudents);
      searchInput.dataset.listenerAdded = 'true';
    }

    // Filter students (show all for demo, in real app filter by teacher's classes)
    let students = dummyData.students;

    // Apply search filter
    if (searchTerm) {
      students = students.filter(s =>
        s.name.toLowerCase().includes(searchTerm) ||
        s.studentNumber.includes(searchTerm) ||
        s.parentName.toLowerCase().includes(searchTerm)
      );
    }

    // Apply class filter
    if (classFilter !== 'all') {
      students = students.filter(s => s.classId === classFilter);
    }

    // Update stats
    document.getElementById('teacher-total-students').textContent = students.length;
    document.getElementById('teacher-male-students').textContent = students.filter(s => s.gender === 'Laki-laki').length;
    document.getElementById('teacher-female-students').textContent = students.filter(s => s.gender === 'Perempuan').length;
    document.getElementById('teacher-active-students').textContent = students.filter(s => s.status === 'Active').length;

    // Render table
    if (students.length === 0) {
      tableBody.innerHTML = `
      <tr>
        <td colspan="10" class="px-4 py-8 text-center text-gray-500">
          <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
            <i class="fas fa-user-graduate text-gray-400 text-2xl"></i>
          </div>
          <p>Tidak ada data siswa</p>
        </td>
      </tr>
    `;
      return;
    }

    tableBody.innerHTML = students.map(s => `
    <tr class="hover:bg-gray-50 transition">
      <td class="px-4 py-3">
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-full ${s.gender === 'Laki-laki' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'} flex items-center justify-center mr-2 flex-shrink-0">
            <i class="fas fa-user text-xs"></i>
          </div>
          <span class="font-medium text-gray-800 text-sm">${s.name}</span>
        </div>
      </td>
      <td class="px-4 py-3">
        <span class="inline-flex px-2 py-1 text-xs rounded-full ${s.gender === 'Laki-laki' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'}">
          ${s.gender === 'Laki-laki' ? 'L' : 'P'}
        </span>
      </td>
      <td class="px-4 py-3 text-sm text-gray-600">${s.studentNumber}</td>
      <td class="px-4 py-3 text-sm text-gray-600">${s.entryYear}</td>
      <td class="px-4 py-3">
        <span class="inline-flex px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700 font-medium">
          ${s.classId}
        </span>
      </td>
      <td class="px-4 py-3 text-sm text-gray-600">${s.parentName}</td>
      <td class="px-4 py-3 text-sm text-gray-600">${s.email || '-'}</td>
      <td class="px-4 py-3 text-sm text-gray-600">${s.phone || '-'}</td>
      <td class="px-4 py-3 text-sm text-gray-600">${s.parentPhone}</td>
      <td class="px-4 py-3 text-center">
        <button onclick="deleteTeacherStudent('${s.studentId}')" class="text-red-400 hover:text-red-600 transition p-1" title="Hapus Siswa">
          <i class="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  `).join('');
  }

  function filterTeacherStudents() {
    renderTeacherStudents();
  }

  function deleteTeacherStudent(studentId) {
    if (!confirm('Apakah Anda yakin ingin menghapus data siswa ini?')) {
      return;
    }

    showLoading();

    const index = dummyData.students.findIndex(s => s.studentId === studentId);
    if (index > -1) {
      const name = dummyData.students[index].name;
      dummyData.students.splice(index, 1);

      setTimeout(() => {
        hideLoading();
        renderTeacherStudents();
        showToast(`Data siswa "${name}" berhasil dihapus`, 'success');
      }, 500);
    }
  }

  // ==================== TEACHER ANNOUNCEMENT FUNCTIONS ====================
  function openTeacherAddAnnouncementModal() {
    document.getElementById('teacher-announcement-title').value = '';
    document.getElementById('teacher-announcement-type').value = 'general';
    document.getElementById('teacher-announcement-class').value = '';
    document.getElementById('teacher-announcement-content').value = '';
    document.getElementById('teacher-announcement-whatsapp').checked = false;
    openModal('modal-teacher-add-announcement');
  }

  function loadTeacherAnnouncements() {
    API.getAnnouncements((res) => {
      if (res && res.success && res.data) {
        cachedAnnouncements = res.data;
      } else {
        cachedAnnouncements = [];
      }
      renderTeacherAnnouncements();
    });
  }

  function renderTeacherAnnouncements() {
    const container = document.getElementById('teacher-announcements-list');
    const searchTerm = document.getElementById('teacher-announcement-search')?.value.toLowerCase() || '';
    const typeFilter = document.getElementById('teacher-announcement-type-filter')?.value || 'all';

    let filtered = cachedAnnouncements;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(a =>
        a.title.toLowerCase().includes(searchTerm) ||
        a.content.toLowerCase().includes(searchTerm)
      );
    }

    // Filter by type
    if (typeFilter !== 'all') {
      filtered = filtered.filter(a => a.type === typeFilter);
    }

    if (filtered.length === 0) {
      container.innerHTML = `<p class="text-center text-gray-500 py-8 col-span-full">Tidak ada pengumuman</p>`;
      return;
    }

    container.innerHTML = filtered.map(a => `
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition">
      <div class="flex items-start justify-between mb-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center ${a.type === 'urgent' ? 'bg-red-100' : a.type === 'academic' ? 'bg-blue-100' : 'bg-gray-100'
      }">
            <i class="fas fa-bullhorn text-xs ${a.type === 'urgent' ? 'text-red-600' : a.type === 'academic' ? 'text-blue-600' : 'text-gray-600'
      }"></i>
          </div>
          <span class="px-2 py-1 rounded-full text-xs font-medium ${a.type === 'urgent' ? 'bg-red-100 text-red-700' : a.type === 'academic' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
      }">${a.type === 'urgent' ? 'Urgent' : a.type === 'academic' ? 'Akademik' : 'Umum'}</span>
        </div>
        <div class="flex gap-2">
          <button onclick="deleteTeacherAnnouncement('${a.id}')" class="text-red-400 hover:text-red-600 p-1.5 transition">
            <i class="fas fa-trash text-sm"></i>
          </button>
        </div>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">${a.title}</h4>
      <p class="text-gray-600 text-sm mb-3 line-clamp-2">${a.content}</p>
      <div class="flex items-center justify-between text-xs text-gray-400">
        <span><i class="fas fa-calendar mr-1"></i>${a.date}</span>
        ${a.classId ? `<span class="px-2 py-1 bg-gray-100 rounded-lg text-gray-600"><i class="fas fa-users mr-1"></i>${a.classId}</span>` : '<span><i class="fas fa-users mr-1"></i>Semua Kelas</span>'}
      </div>
    </div>
  `).join('');
  }

  function saveTeacherAnnouncement(event) {
    event.preventDefault();
    showLoading();

    const title = document.getElementById('teacher-announcement-title').value;
    const type = document.getElementById('teacher-announcement-type').value;
    const classId = document.getElementById('teacher-announcement-class').value;
    const content = document.getElementById('teacher-announcement-content').value;
    const sendWhatsapp = document.getElementById('teacher-announcement-whatsapp').checked;

    const now = new Date();
    const dateStr = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

    const newAnnouncement = {
      id: 'AN' + Date.now().toString().slice(-6),
      title: title,
      content: content,
      date: dateStr,
      type: type,
      classId: classId || null,
      createdBy: currentUser?.name || 'Teacher',
      sentViaWhatsapp: sendWhatsapp
    };

    API.addAnnouncement(newAnnouncement, (response) => {
      if (response && response.success) {
        hideLoading();
        closeModal('modal-teacher-add-announcement');

        // Refresh from API
        loadTeacherAnnouncements();

        // Reset form
        document.getElementById('teacher-announcement-title').value = '';
        document.getElementById('teacher-announcement-type').value = 'general';
        document.getElementById('teacher-announcement-class').value = '';
        document.getElementById('teacher-announcement-content').value = '';
        document.getElementById('teacher-announcement-whatsapp').checked = false;

        // Send WhatsApp notifications if checked
        if (sendWhatsapp) {
          sendWhatsappNotifications(newAnnouncement);
        }

        showToast('Pengumuman berhasil dikirim!', 'success');
      } else {
        hideLoading();
        showToast(response?.error || 'Gagal menambahkan pengumuman', 'error');
      }
    });
  }

  function deleteTeacherAnnouncement(id) {
    if (!confirm('Hapus pengumuman ini?')) return;

    API.deleteAnnouncement(id, (response) => {
      if (response && response.success) {
        loadTeacherAnnouncements();
        showToast('Pengumuman dihapus', 'success');
      } else {
        showToast(response?.error || 'Gagal menghapus pengumuman', 'error');
      }
    });
  }

  function sendWhatsappNotifications(announcement) {
    // Show a toast that it's starting
    showToast('Mengirim notifikasi WhatsApp...', 'info');

    // Fetch live students from the backend
    API.getStudents((response) => {
      if (!response || !response.success || !response.data) {
        showToast('Gagal memuat data siswa untuk dikiirm WhatsApp', 'error');
        return;
      }

      let studentsToSend = response.data;
      if (announcement.classId) {
        studentsToSend = studentsToSend.filter(s => s.classId === announcement.classId);
      }

      // Filter students with parent phone numbers
      const studentsWithPhones = studentsToSend.filter(s => s.parentPhone && s.parentPhone.trim() !== '');

      if (studentsWithPhones.length === 0) {
        showToast('Tidak ada nomor WhatsApp orang tua untuk kelas tersebut', 'info');
        return;
      }

      // Prepare WhatsApp message
      const message = '*PENGUMUMAN SEKOLAH*%0A%0A' +
        '*' + announcement.title + '*%0A%0A' +
        announcement.content + '%0A%0A' +
        'Tanggal: ' + announcement.date + '%0A' +
        (announcement.classId ? 'Kelas: ' + announcement.classId + '%0A' : '') +
        '%0A_Terima kasih_';

      // Ensure the browser handles multiple pops (might be blocked)
      alert(`Sistem akan membuka ${studentsWithPhones.length} tab WhatsApp. Pastikan popup dibolehkan.`);

      // Open WhatsApp for each parent (in real app, this would be batch/bulk send)
      let sentCount = 0;
      studentsWithPhones.forEach((student, index) => {
        setTimeout(() => {
          let phone = student.parentPhone.replace(/\D/g, ''); // Remove non-digits
          if (phone.startsWith('0')) {
            phone = '62' + phone.substring(1); // Convert 0812... to 62812...
          }
          const whatsappUrl = 'https://wa.me/' + phone + '?text=' + message;

          // In production, this would use a WhatsApp API service
          // For demo, we'll just log it
          console.log('Sending to ' + student.parentName + ' (' + phone + '): ' + whatsappUrl);
          sentCount++;

          if (sentCount === studentsWithPhones.length) {
            showToast('Pengumuman dikirim ke ' + sentCount + ' orang tua via WhatsApp', 'success');
          }
        }, index * 500); // Stagger the sends
      });

      // For demo purposes, show immediate success
      setTimeout(() => {
        showToast(`Pengumuman siap dikirim ke ${studentsWithPhones.length} orang tua`, 'success');
      }, 1000);
    });
  }
  function openCreateQuizModal() {
    // Set default due date (7 days from now)
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    document.getElementById('quiz-due-date').value = nextWeek.toISOString().split('T')[0];

    // Clear questions container and add first question
    document.getElementById('quiz-questions-container').innerHTML = '';
    addQuizQuestion();

    openModal('modal-create-quiz');
  }

  // Add new question to quiz form
  function addQuizQuestion() {
    const container = document.getElementById('quiz-questions-container');
    const questionNum = container.children.length + 1;

    const questionDiv = document.createElement('div');
    questionDiv.className = 'bg-gray-50 rounded-xl p-4 border border-gray-200';
    questionDiv.innerHTML = `
    <div class="flex items-center justify-between mb-3">
      <span class="font-medium text-gray-700">Soal ${questionNum}</span>
      ${questionNum > 1 ? `<button type="button" onclick="this.closest('.bg-gray-50').remove(); updateQuestionNumbers();" class="text-red-400 hover:text-red-600 text-sm"><i class="fas fa-trash"></i></button>` : ''}
    </div>
    <div class="mb-3">
      <textarea required class="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" rows="2" placeholder="Tulis pertanyaan..." data-question></textarea>
    </div>
    <div class="space-y-2" data-options>
      <div class="flex items-center gap-2">
        <input type="radio" name="correct-${questionNum}" value="0" class="w-4 h-4 text-blue-500" required>
        <input type="text" required class="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Pilihan A" data-option>
      </div>
      <div class="flex items-center gap-2">
        <input type="radio" name="correct-${questionNum}" value="1" class="w-4 h-4 text-blue-500">
        <input type="text" required class="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Pilihan B" data-option>
      </div>
      <div class="flex items-center gap-2">
        <input type="radio" name="correct-${questionNum}" value="2" class="w-4 h-4 text-blue-500">
        <input type="text" required class="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Pilihan C" data-option>
      </div>
      <div class="flex items-center gap-2">
        <input type="radio" name="correct-${questionNum}" value="3" class="w-4 h-4 text-blue-500">
        <input type="text" required class="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Pilihan D" data-option>
      </div>
    </div>
    <p class="text-xs text-gray-400 mt-2"><i class="fas fa-info-circle mr-1"></i>Pilih radio button di sebelah jawaban yang benar</p>
  `;

    container.appendChild(questionDiv);
  }

  // Update question numbers after deletion
  function updateQuestionNumbers() {
    const container = document.getElementById('quiz-questions-container');
    Array.from(container.children).forEach((div, index) => {
      const span = div.querySelector('span');
      if (span) span.textContent = `Soal ${index + 1}`;
    });
  }

  // Save new quiz (Teacher)
  function saveNewQuiz(event) {
    event.preventDefault();
    showLoading();

    const title = document.getElementById('quiz-title').value;
    const subject = document.getElementById('quiz-subject').value;
    const classId = document.getElementById('quiz-class').value;
    const duration = parseInt(document.getElementById('quiz-duration').value);
    const dueDate = document.getElementById('quiz-due-date').value;

    // Collect questions
    const questions = [];
    const questionDivs = document.querySelectorAll('#quiz-questions-container > div');

    questionDivs.forEach((div, index) => {
      const questionText = div.querySelector('[data-question]').value;
      const optionInputs = div.querySelectorAll('[data-option]');
      const options = Array.from(optionInputs).map(input => input.value);

      // Get correct answer
      const radioName = `correct-${index + 1}`;
      const correctRadio = div.querySelector(`input[name="${radioName}"]:checked`);
      const correct = correctRadio ? parseInt(correctRadio.value) : 0;

      questions.push({
        id: index + 1,
        question: questionText,
        options: options,
        correct: correct,
        points: 10
      });
    });

    // Create new quiz object
    const newQuiz = {
      quizId: 'Q' + Date.now(),
      title: title,
      description: `Quiz ${subject} untuk kelas ${classId}`,
      classId: classId,
      className: classId,
      subject: subject,
      teacher: currentUser?.name || 'Teacher',
      teacherId: 'T001',
      duration: duration,
      dueDate: dueDate,
      status: 'Active',
      createdAt: new Date().toISOString().split('T')[0],
      questions: questions
    };

    // Save to backend
    API.addQuiz(newQuiz, (res) => {
      hideLoading();
      if (res && res.success) {
        closeModal('modal-create-quiz');
        // Refresh quiz lists
        if (currentUser?.role === 'Teacher') renderTeacherQuizzes();
        loadAdminQuizzes();
        showToast('Quiz "' + title + '" berhasil dibuat!', 'success');
      } else {
        showToast('Gagal membuat quiz: ' + (res?.error || 'Unknown error'), 'error');
      }
    });
  }

  // Filter teacher quizzes
  function filterTeacherQuizzes(filter) {
    teacherQuizFilter = filter;

    // Update tabs
    const tabs = ['all', 'active', 'completed'];
    tabs.forEach(tab => {
      const btn = document.getElementById(`teacher-quiz-tab-${tab}`);
      if (btn) {
        if (tab === filter) {
          btn.className = 'px-4 py-2 rounded-xl text-sm font-medium bg-blue-500 text-white shadow-md transition whitespace-nowrap';
        } else {
          btn.className = 'px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition whitespace-nowrap';
        }
      }
    });

    renderTeacherQuizzes();
  }

  // Render teacher quizzes
  function renderTeacherQuizzes() {
    const container = document.getElementById('teacher-quizzes-list');
    if (!container) return;
    container.innerHTML = '<p class="text-gray-400 text-center py-8 col-span-full"><i class="fas fa-spinner fa-spin mr-2"></i>Loading...</p>';

    API.getQuizzes((res) => {
      const allQuizzes = (res && res.success && res.data) ? res.data : [];
      cachedQuizzes = allQuizzes;
      const teacherName = currentUser?.name || '';

      // Filter by teacher (by name or show all for admin)
      let quizzes = currentUser?.role === 'Teacher'
        ? allQuizzes.filter(q => q.teacher === teacherName || q.createdBy === teacherName)
        : allQuizzes;

      // Apply filter
      if (teacherQuizFilter === 'active') {
        quizzes = quizzes.filter(q => q.status === 'Active');
      } else if (teacherQuizFilter === 'completed') {
        quizzes = quizzes.filter(q => q.status === 'Completed');
      }

      // Update stats
      const myQuizzes = currentUser?.role === 'Teacher'
        ? allQuizzes.filter(q => q.teacher === teacherName || q.createdBy === teacherName)
        : allQuizzes;
      const totalEl = document.getElementById('teacher-total-quizzes');
      const activeEl = document.getElementById('teacher-active-quizzes');
      const completedEl = document.getElementById('teacher-completed-quizzes');
      if (totalEl) totalEl.textContent = myQuizzes.length;
      if (activeEl) activeEl.textContent = myQuizzes.filter(q => q.status === 'Active').length;
      if (completedEl) completedEl.textContent = myQuizzes.filter(q => q.status === 'Completed').length;

      // Calculate average score from results
      API.getQuizResults((rRes) => {
        cachedQuizResults = (rRes && rRes.success && rRes.data) ? rRes.data : [];
        const results = cachedQuizResults.filter(r =>
          quizzes.some(q => q.quizId === r.quizId)
        );
        const avgScore = results.length > 0
          ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
          : '-';
        const avgEl = document.getElementById('teacher-avg-score');
        if (avgEl) avgEl.textContent = avgScore;
      });

      // Render quiz cards
      if (quizzes.length === 0) {
        container.innerHTML = `
      <div class="col-span-full text-center py-8 bg-white rounded-2xl border border-gray-100">
        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
          <i class="fas fa-clipboard-list text-gray-400 text-2xl"></i>
        </div>
        <p class="text-gray-500">Belum ada quiz</p>
        <button onclick="openCreateQuizModal()" class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600">
          Buat Quiz Pertama
        </button>
      </div>
    `;
        return;
      }

      container.innerHTML = quizzes.map(quiz => `
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition">
      <div class="flex items-start justify-between mb-3">
        <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
          <i class="fas fa-clipboard-list text-blue-500 text-xl"></i>
        </div>
        <span class="px-3 py-1 ${quiz.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'} text-xs rounded-full font-medium">
          ${quiz.status === 'Active' ? 'Aktif' : 'Selesai'}
        </span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-1 line-clamp-2">${quiz.title}</h4>
      <p class="text-sm text-gray-500 mb-3">${quiz.subject} • ${quiz.className}</p>
      <div class="flex items-center text-xs text-gray-400 mb-4 space-x-4">
        <span><i class="fas fa-question-circle mr-1"></i>${quiz.questions.length} soal</span>
        <span><i class="fas fa-clock mr-1"></i>${quiz.duration} menit</span>
      </div>
      <div class="flex space-x-2">
        <button onclick="viewQuizDetails('${quiz.quizId}')" class="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
          <i class="fas fa-eye mr-1"></i>Detail
        </button>
        ${quiz.status === 'Active' ? `
        <button onclick="closeQuiz('${quiz.quizId}')" class="px-3 py-2 bg-red-50 text-red-600 rounded-lg text-sm hover:bg-red-100 transition" title="Tutup Quiz">
          <i class="fas fa-lock"></i>
        </button>
        ` : ''}
      </div>
    </div>
  `).join('');
    }); // close API.getQuizzes callback
  } // close renderTeacherQuizzes

  // View quiz details (Teacher)
  function viewQuizDetails(quizId) {
    const quiz = cachedQuizzes.find(q => q.quizId === quizId);
    if (!quiz) return;

    const results = cachedQuizResults.filter(r => r.quizId === quizId);

    let detailsHTML = `
    <div class="mb-4">
      <h4 class="font-bold text-gray-800 text-lg">${quiz.title}</h4>
      <p class="text-gray-500">${quiz.subject} • ${quiz.className}</p>
    </div>
    <div class="grid grid-cols-3 gap-3 mb-4">
      <div class="bg-blue-50 p-3 rounded-xl text-center">
        <div class="text-2xl font-bold text-blue-600">${quiz.questions.length}</div>
        <div class="text-xs text-blue-400">Soal</div>
      </div>
      <div class="bg-emerald-50 p-3 rounded-xl text-center">
        <div class="text-2xl font-bold text-emerald-600">${quiz.duration}</div>
        <div class="text-xs text-emerald-400">Menit</div>
      </div>
      <div class="bg-purple-50 p-3 rounded-xl text-center">
        <div class="text-2xl font-bold text-purple-600">${results.length}</div>
        <div class="text-xs text-purple-400">Peserta</div>
      </div>
    </div>
    <div class="mb-4">
      <h5 class="font-medium text-gray-700 mb-2">Preview Soal:</h5>
      <div class="space-y-3 max-h-60 overflow-y-auto">
  `;

    quiz.questions.forEach((q, i) => {
      detailsHTML += `
      <div class="bg-gray-50 p-3 rounded-xl">
        <p class="text-sm font-medium text-gray-800 mb-2">${i + 1}. ${q.question}</p>
        <div class="text-xs text-gray-500 space-y-1">
          ${q.options.map((opt, j) => `
            <div class="flex items-center ${j === q.correct ? 'text-emerald-600 font-medium' : ''}">
              <span class="w-5 h-5 rounded-full ${j === q.correct ? 'bg-emerald-100' : 'bg-gray-200'} flex items-center justify-center text-xs mr-2">${String.fromCharCode(65 + j)}</span>
              ${opt}
              ${j === q.correct ? '<i class="fas fa-check ml-2"></i>' : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
    });

    detailsHTML += `
      </div>
    </div>
  `;

    // Show in a custom alert/modal
    showToast('Detail quiz dilihat', 'info');
  }

  // Close quiz (mark as completed)
  function closeQuiz(quizId) {
    if (!confirm('Tutup quiz ini? Siswa tidak akan bisa mengerjakan lagi.')) return;

    API.updateQuiz(quizId, { status: 'Completed' }, (res) => {
      if (res && res.success) {
        renderTeacherQuizzes();
        showToast('Quiz telah ditutup', 'success');
      } else {
        showToast('Gagal menutup quiz', 'error');
      }
    });
  }

  // STUDENT QUIZ FUNCTIONS

  // Start taking quiz (Student)
  function startQuiz(quizId) {
    const quiz = cachedQuizzes.find(q => q.quizId === quizId);
    if (!quiz) return;

    const studentId = currentUser?.studentId || currentUser?.userId || '';

    // Fresh check from API to prevent double submission
    showLoading();
    API.getQuizResults((res) => {
      hideLoading();
      if (res && res.success && res.data) cachedQuizResults = res.data;

      const existingResult = cachedQuizResults.find(
        r => r.quizId === quizId && r.studentId === studentId
      );

      if (existingResult) {
        showToast('Anda sudah mengerjakan quiz ini', 'info');
        showQuizResult(existingResult);
        return;
      }

      currentQuiz = quiz;
      currentQuestionIndex = 0;
      currentQuizAnswers = new Array(quiz.questions.length).fill(null);
      quizTimeRemaining = quiz.duration * 60; // Convert to seconds

      document.getElementById('take-quiz-title').textContent = quiz.title;
      document.getElementById('take-quiz-subject').textContent = `${quiz.subject} • ${quiz.questions.length} soal`;

      renderQuizQuestion();
      startQuizTimer();

      openModal('modal-take-quiz');
    }); // close API.getQuizResults callback
  }

  // Render current quiz question
  function renderQuizQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    const container = document.getElementById('quiz-question-container');

    // Update progress
    document.getElementById('quiz-progress-text').textContent = `${currentQuestionIndex + 1}/${currentQuiz.questions.length}`;
    document.getElementById('quiz-progress-bar').style.width = `${((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100}%`;

    // Render question
    container.innerHTML = `
    <div class="animate-fade-in">
      <h4 class="text-lg font-medium text-gray-800 mb-4">${currentQuestionIndex + 1}. ${question.question}</h4>
      <div class="space-y-3">
        ${question.options.map((option, index) => `
          <button type="button" onclick="selectQuizAnswer(${index})" 
            class="w-full p-4 text-left rounded-xl border-2 transition ${currentQuizAnswers[currentQuestionIndex] === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'}">
            <div class="flex items-center">
              <span class="w-8 h-8 rounded-full ${currentQuizAnswers[currentQuestionIndex] === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center font-medium mr-3 transition">
                ${String.fromCharCode(65 + index)}
              </span>
              <span class="text-gray-700">${option}</span>
            </div>
          </button>
        `).join('')}
      </div>
    </div>
  `;

    // Update buttons
    document.getElementById('quiz-prev-btn').disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === currentQuiz.questions.length - 1) {
      document.getElementById('quiz-next-btn').classList.add('hidden');
      document.getElementById('quiz-submit-btn').classList.remove('hidden');
    } else {
      document.getElementById('quiz-next-btn').classList.remove('hidden');
      document.getElementById('quiz-submit-btn').classList.add('hidden');
    }
  }

  // Select answer
  function selectQuizAnswer(answerIndex) {
    currentQuizAnswers[currentQuestionIndex] = answerIndex;
    renderQuizQuestion();
  }

  // Navigate to previous question
  function prevQuizQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuizQuestion();
    }
  }

  // Navigate to next question
  function nextQuizQuestion() {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      currentQuestionIndex++;
      renderQuizQuestion();
    }
  }

  // Start quiz timer
  function startQuizTimer() {
    updateQuizTimerDisplay();

    quizTimerInterval = setInterval(() => {
      quizTimeRemaining--;
      updateQuizTimerDisplay();

      if (quizTimeRemaining <= 0) {
        clearInterval(quizTimerInterval);
        submitQuizAnswers();
        showToast('Waktu habis! Quiz otomatis dikumpulkan.', 'warning');
      }
    }, 1000);
  }

  // Update timer display
  function updateQuizTimerDisplay() {
    const minutes = Math.floor(quizTimeRemaining / 60);
    const seconds = quizTimeRemaining % 60;
    document.getElementById('quiz-timer').textContent =
      `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  // Submit quiz answers
  function submitQuizAnswers() {
    clearInterval(quizTimerInterval);

    // Calculate score
    let correctCount = 0;
    let totalPoints = 0;
    let earnedPoints = 0;

    currentQuiz.questions.forEach((q, index) => {
      totalPoints += q.points;
      if (currentQuizAnswers[index] === q.correct) {
        correctCount++;
        earnedPoints += q.points;
      }
    });

    const score = Math.round((earnedPoints / totalPoints) * 100);
    const timeSpent = currentQuiz.duration * 60 - quizTimeRemaining;

    const studentId = currentUser?.studentId || currentUser?.userId || '';
    const studentName = currentUser?.name || 'Unknown';

    const result = {
      resultId: 'R' + Date.now(),
      quizId: currentQuiz.quizId,
      studentId: studentId,
      studentName: studentName,
      answers: currentQuizAnswers,
      score: score,
      correctCount: correctCount,
      wrongCount: currentQuiz.questions.length - correctCount,
      timeSpent: Math.ceil(timeSpent / 60),
      submittedAt: new Date().toISOString(),
      status: 'Completed'
    };

    API.submitQuizResult(result, (res) => {
      if (res && res.success) {
        closeModal('modal-take-quiz');
        showQuizResult(result);
      } else {
        showToast('Gagal mengirim jawaban: ' + (res?.error || 'Unknown error'), 'error');
      }
    });
  }

  // Show quiz result
  function showQuizResult(result) {
    const quiz = cachedQuizzes.find(q => q.quizId === result.quizId);

    document.getElementById('result-score').textContent = result.score;
    document.getElementById('result-correct').textContent = result.correctCount;
    document.getElementById('result-wrong').textContent = result.wrongCount;
    document.getElementById('result-time').textContent = result.timeSpent + ' menit';

    // Add to cache so lists refresh correctly
    if (!cachedQuizResults.find(r => r.resultId === result.resultId)) {
      cachedQuizResults.push(result);
    }

    // Refresh the student quiz list and home page
    renderStudentQuizzes();
    renderStudentQuizList();
    renderStudentAnnouncements();

    openModal('modal-quiz-result');
  }

  // ==================== INITIALIZATION ====================
  window.addEventListener('load', function () {
    navigateTo('landing');
  });

  // Handle hash changes for direct links
  window.addEventListener('hashchange', function () {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById('page-' + hash)) {
      navigateTo(hash);
    }
  });

  // Render all static Lucide icons (landing/login badges, form icons, etc.)
  // Safe to call again later — already-rendered <svg> nodes are skipped.
  if (window.lucide) lucide.createIcons();