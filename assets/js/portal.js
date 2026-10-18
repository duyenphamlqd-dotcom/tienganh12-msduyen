/**
 * ==========================================================
 * PORTAL JAVASCRIPT - TRANG CHỦ HỆ THỐNG ĐỀ CƯƠNG TIẾNG ANH 12
 * Giáo viên thiết kế: Ms. Duyên | Global Success Grade 12
 * ==========================================================
 */

(function () {
  'use strict';

  const PORTAL_TESTS = [
    // --- TEST 01 ---
    {
      id: "e12-test01-listening-part1",
      group: "TEST 01",
      groupBadge: "Test 01",
      title: "Test 01 · Part 1 · Listening",
      desc: "Walt Disney's Life: 4 câu hỏi True/False, tích hợp file nghe gốc MP3 chuẩn bản xứ, transcript song ngữ và chấm điểm tức thì.",
      file: "tests/e12-test01-listening-part1.html",
      category: "listening",
      skillText: "🎧 Listening",
      questions: 4,
      time: "50 phút",
      points: "10.0 điểm"
    },
    {
      id: "e12-test01-listening-part1-vocab",
      group: "TEST 01",
      groupBadge: "Test 01",
      title: "Test 01 · Part 1 · Vocabulary Lab",
      desc: "10 cụm từ vựng cốt lõi trích từ bài nghe Walt Disney: Luyện nối nghĩa (Matching) và thẻ ghi nhớ lật mặt (Flashcards).",
      file: "tests/e12-test01-listening-part1-vocab.html",
      category: "vocab",
      skillText: "🗂 Từ vựng",
      questions: 10,
      time: "Tự do",
      points: "Luyện tập"
    },
    {
      id: "e12-test01-listening-part2",
      group: "TEST 01",
      groupBadge: "Test 01",
      title: "Test 01 · Part 2 · Listening",
      desc: "Exercise 14 Listening: 4 câu hỏi trắc nghiệm A-B-C-D, kèm hệ thống điều chỉnh tốc độ nghe (0.75x - 1.25x) và audio gốc MP3.",
      file: "tests/e12-test01-listening-part2.html",
      category: "listening",
      skillText: "🎧 Listening",
      questions: 4,
      time: "50 phút",
      points: "10.0 điểm"
    },
    {
      id: "e12-test01-listening-part2-vocab",
      group: "TEST 01",
      groupBadge: "Test 01",
      title: "Test 01 · Part 2 · Vocabulary Lab",
      desc: "Kho từ vựng bổ trợ Unit 2: Luyện phát âm IPA, từ đồng nghĩa/trái nghĩa và bài tập củng cố phản xạ ghi nhớ.",
      file: "tests/e12-test01-listening-part2-vocab.html",
      category: "vocab",
      skillText: "🗂 Từ vựng",
      questions: 10,
      time: "Tự do",
      points: "Luyện tập"
    },
    {
      id: "e12-test01-reading-q1-5",
      group: "TEST 01",
      groupBadge: "Test 01",
      title: "Test 01 · Q1–5 · Reading",
      desc: "Đọc hiểu đoạn văn 5 câu hỏi trọng tâm, phân tích ngữ cảnh, từ chìa khóa và giải thích chi tiết phương án đúng/sai.",
      file: "tests/e12-test01-reading-q1-5.html",
      category: "reading",
      skillText: "📖 Reading",
      questions: 5,
      time: "50 phút",
      points: "2.5 điểm"
    },
    {
      id: "e12-test01-reading-q14-18",
      group: "TEST 01",
      groupBadge: "Test 01",
      title: "Test 01 · Q14–18 · Reading Cloze",
      desc: "Đọc điền khuyết đoạn văn 5 câu hỏi ngữ pháp và từ vựng, cung cấp bản dịch song ngữ và giải thích chi tiết cấu trúc câu.",
      file: "tests/e12-test01-reading-q14-18.html",
      category: "reading",
      skillText: "📖 Reading",
      questions: 5,
      time: "50 phút",
      points: "2.5 điểm"
    },
    {
      id: "e12-test01-reading-q19-24",
      group: "TEST 01",
      groupBadge: "Test 01",
      title: "Test 01 · Q19–24 · Reading Comprehension",
      desc: "Đọc hiểu văn bản chuyên sâu 6 câu hỏi, rèn luyện kỹ năng Skimming & Scanning, xác định đại từ thay thế và ý chính bài đọc.",
      file: "tests/e12-test01-reading-q19-24.html",
      category: "reading",
      skillText: "📖 Reading",
      questions: 6,
      time: "50 phút",
      points: "3.0 điểm"
    },

    // --- TEST 02 ---
    {
      id: "e12-test02-listening-part1",
      group: "TEST 02",
      groupBadge: "Test 02",
      title: "Test 02 · Part 1 · Listening",
      desc: "Luyện nghe hiểu Part 1 Test 02: Tích hợp sẵn file âm thanh MP3 nguyên bản, câu hỏi True/False, phân tích đáp án tức thì.",
      file: "tests/e12-test02-listening-part1.html",
      category: "listening",
      skillText: "🎧 Listening",
      questions: 4,
      time: "50 phút",
      points: "10.0 điểm"
    },
    {
      id: "e12-test02-listening-part1-vocab",
      group: "TEST 02",
      groupBadge: "Test 02",
      title: "Test 02 · Part 1 · Vocabulary Lab",
      desc: "10 cụm từ thiết yếu Test 02 Part 1: Nối nghĩa, lật thẻ từ vựng thông minh và bài tập kiểm tra độ nhớ từ.",
      file: "tests/e12-test02-listening-part1-vocab.html",
      category: "vocab",
      skillText: "🗂 Từ vựng",
      questions: 10,
      time: "Tự do",
      points: "Luyện tập"
    },
    {
      id: "e12-test02-listening-part2",
      group: "TEST 02",
      groupBadge: "Test 02",
      title: "Test 02 · Part 2 · Listening",
      desc: "Bài nghe trắc nghiệm chuyên đề: File MP3 nhúng sẵn chất lượng cao, bài dịch hội thoại tiếng Việt và xuất chứng nhận.",
      file: "tests/e12-test02-listening-part2.html",
      category: "listening",
      skillText: "🎧 Listening",
      questions: 4,
      time: "50 phút",
      points: "10.0 điểm"
    },
    {
      id: "e12-test02-listening-part2-vocab",
      group: "TEST 02",
      groupBadge: "Test 02",
      title: "Test 02 · Part 2 · Vocabulary Lab",
      desc: "Chuyên đề từ vựng nâng cao: Bổ trợ vốn từ học thuật cho học sinh 12A1 & 12A4 chuẩn bị kì thi Giữa kì 1.",
      file: "tests/e12-test02-listening-part2-vocab.html",
      category: "vocab",
      skillText: "🗂 Từ vựng",
      questions: 10,
      time: "Tự do",
      points: "Luyện tập"
    },
    {
      id: "e12-test02-reading-q9-13",
      group: "TEST 02",
      groupBadge: "Test 02",
      title: "Test 02 · Q9–13 · Reading Cloze",
      desc: "Đọc điền khuyết 5 câu trọng tâm: Kiểm tra liên từ, mạo từ, cụm giới từ cố định kèm phản hồi giải thích đáp án.",
      file: "tests/e12-test02-reading-q9-13.html",
      category: "reading",
      skillText: "📖 Reading",
      questions: 5,
      time: "50 phút",
      points: "2.5 điểm"
    },
    {
      id: "e12-test02-reading-q14-18",
      group: "TEST 02",
      groupBadge: "Test 02",
      title: "Test 02 · Q14–18 · Reading Cloze",
      desc: "Rèn luyện kĩ năng đọc điền từ loại: Danh từ, động từ, tính từ và trạng từ trong văn cảnh thực tế.",
      file: "tests/e12-test02-reading-q14-18.html",
      category: "reading",
      skillText: "📖 Reading",
      questions: 5,
      time: "50 phút",
      points: "2.5 điểm"
    },
    {
      id: "e12-test02-reading-q19-24",
      group: "TEST 02",
      groupBadge: "Test 02",
      title: "Test 02 · Q19–24 · Reading Comprehension",
      desc: "Đọc hiểu văn bản 6 câu hỏi: Rèn luyện khả năng suy luận ý ngầm (inference) và đối chiếu thông tin chi tiết.",
      file: "tests/e12-test02-reading-q19-24.html",
      category: "reading",
      skillText: "📖 Reading",
      questions: 6,
      time: "50 phút",
      points: "3.0 điểm"
    },

    // --- TEST 03 ---
    {
      id: "e12-test03-reading-q6-10",
      group: "TEST 03",
      groupBadge: "Test 03",
      title: "Test 03 · Q6–10 · Reading",
      desc: "Đọc hiểu chuyên sâu Test 03: Đánh giá kĩ năng nắm bắt thông tin nhanh và chính xác của học sinh lớp 12.",
      file: "tests/e12-test03-reading-q6-10.html",
      category: "reading",
      skillText: "📖 Reading",
      questions: 5,
      time: "50 phút",
      points: "2.5 điểm"
    },
    {
      id: "e12-test03-reading-q11-15",
      group: "TEST 03",
      groupBadge: "Test 03",
      title: "Test 03 · Q11–15 · Reading Cloze",
      desc: "Đọc điền tổng hợp kiến thức ngữ pháp và từ vựng Unit 1–3: Khép lại đề cương ôn tập Giữa học kì 1 toàn diện.",
      file: "tests/e12-test03-reading-q11-15.html",
      category: "reading",
      skillText: "📖 Reading",
      questions: 5,
      time: "50 phút",
      points: "2.5 điểm"
    }
  ];

  function initPortal() {
    renderStudentInfo();
    renderTestsCards('all');
    updateStats();
    setupEventListeners();
  }

  function renderStudentInfo() {
    const name = localStorage.getItem('duyen_e12_student_name') || '';
    const cls = localStorage.getItem('duyen_e12_student_class') || '';

    const nameInput = document.getElementById('portalStudentName');
    const classInput = document.getElementById('portalStudentClass');
    const displayEl = document.getElementById('portalStudentDisplay');

    if (nameInput) nameInput.value = name;
    if (classInput) classInput.value = cls;

    if (displayEl) {
      if (name) {
        displayEl.innerHTML = `Xin chào, <strong>${escapeHtml(name)}</strong> ${cls ? `<span style="color:#94a3b8">(${escapeHtml(cls)})</span>` : ''}! Chúc bạn đạt kết quả cao!`;
      } else {
        displayEl.innerHTML = `Vui lòng nhập họ tên để hệ thống tự động ghi nhận điểm và cấp chứng nhận!`;
      }
    }
  }

  function renderTestsCards(filter) {
    const container = document.getElementById('testsContainer');
    if (!container) return;

    const progress = JSON.parse(localStorage.getItem('duyen_e12_progress') || '{}');

    const groups = {};
    PORTAL_TESTS.forEach(test => {
      if (filter !== 'all' && test.category !== filter) return;

      if (!groups[test.group]) groups[test.group] = [];
      groups[test.group].push(test);
    });

    let html = '';

    for (const groupName in groups) {
      const tests = groups[groupName];
      if (tests.length === 0) continue;

      html += `
        <section class="group-section">
          <div class="group-header">
            <span class="group-badge">${escapeHtml(tests[0].groupBadge)}</span>
            <h2 class="group-title">${escapeHtml(groupName)}</h2>
          </div>
          <div class="tests-grid">
      `;

      tests.forEach(test => {
        const fileName = test.file.replace('tests/', '');
        const savedResult = progress[fileName];
        const isCompleted = !!savedResult;

        html += `
          <div class="test-card" data-category="${test.category}">
            <div>
              <div class="test-badge-row">
                <span class="skill-tag ${test.category}">${test.skillText}</span>
                <span class="status-badge ${isCompleted ? 'completed' : 'pending'}">
                  ${isCompleted ? '✓ Đã hoàn thành' : '⏳ Chưa làm'}
                </span>
              </div>
              <h3 class="test-card-title">${escapeHtml(test.title)}</h3>
              <p class="test-card-desc">${escapeHtml(test.desc)}</p>
            </div>

            <div>
              ${isCompleted ? `
                <div style="background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.25);border-radius:8px;padding:8px 12px;margin-bottom:14px;font-size:12.5px;color:#a7f3d0">
                  <strong>Kết quả:</strong> ${escapeHtml(savedResult.scoreText)}
                  <span style="display:block;color:#94a3b8;font-size:11px;margin-top:2px;">🕒 ${savedResult.completedAt || ''}</span>
                </div>
              ` : ''}

              <div class="test-meta-info">
                <div class="test-meta-item"><span>📝</span> ${test.questions} câu</div>
                <div class="test-meta-item"><span>⏱</span> ${test.time}</div>
                <div class="test-meta-item"><span>⭐</span> ${test.points}</div>
              </div>

              <a href="${test.file}" class="btn-start-test">
                <span>${isCompleted ? 'Làm lại bài này ↻' : 'Bắt đầu làm bài →'}</span>
              </a>
            </div>
          </div>
        `;
      });

      html += `
          </div>
        </section>
      `;
    }

    if (html === '') {
      html = `<div style="text-align:center;padding:40px;color:#94a3b8">Không có bài thi nào phù hợp với bộ lọc.</div>`;
    }

    container.innerHTML = html;
  }

  function updateStats() {
    const progress = JSON.parse(localStorage.getItem('duyen_e12_progress') || '{}');
    const completedCount = Object.keys(progress).length;
    const totalCount = PORTAL_TESTS.length;
    const percentage = Math.round((completedCount / totalCount) * 100);

    const completedEl = document.getElementById('statCompleted');
    const totalEl = document.getElementById('statTotal');
    const pctEl = document.getElementById('statPercent');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    if (completedEl) completedEl.textContent = completedCount;
    if (totalEl) totalEl.textContent = totalCount;
    if (pctEl) pctEl.textContent = percentage + '%';

    if (progressFill) progressFill.style.width = percentage + '%';
    if (progressText) progressText.textContent = `${completedCount}/${totalCount} bài đã hoàn thành (${percentage}%)`;

    renderResultsTable();
  }

  function renderResultsTable() {
    const tableBody = document.getElementById('resultsTableBody');
    if (!tableBody) return;

    const progress = JSON.parse(localStorage.getItem('duyen_e12_progress') || '{}');
    const entries = Object.entries(progress);

    if (entries.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:24px;color:#94a3b8">Bạn chưa làm bài nào. Hãy chọn một bài ở trên để bắt đầu!</td></tr>`;
      return;
    }

    let rows = '';
    entries.forEach(([fileName, res], idx) => {
      rows += `
        <tr>
          <td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.08)">${idx + 1}</td>
          <td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.08);font-weight:700">${escapeHtml(res.title || fileName)}</td>
          <td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.08);color:#34d399;font-weight:700">${escapeHtml(res.scoreText || 'Đã nộp')}</td>
          <td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.08);color:#94a3b8">${escapeHtml(res.completedAt || '')}</td>
          <td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.08)">
            <a href="tests/${fileName}" style="color:#60a5fa;text-decoration:none;font-weight:600">Mở bài thi →</a>
          </td>
        </tr>
      `;
    });

    tableBody.innerHTML = rows;
  }

  function setupEventListeners() {
    const saveBtn = document.getElementById('btnSaveStudent');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        const name = (document.getElementById('portalStudentName').value || '').trim();
        const cls = (document.getElementById('portalStudentClass').value || '').trim();

        if (!name) {
          alert('Vui lòng nhập họ và tên của bạn.');
          return;
        }

        localStorage.setItem('duyen_e12_student_name', name);
        localStorage.setItem('duyen_e12_student_class', cls);
        renderStudentInfo();
        alert('🎉 Đã lưu thông tin học sinh thành công!\nHọ tên của bạn sẽ tự động hiển thị trong cả 16 bài học và bài thi.');
      });
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter || 'all';
        renderTestsCards(filter);
      });
    });

    const resetBtn = document.getElementById('btnResetProgress');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn đặt lại toàn bộ kết quả làm bài để luyện tập lại từ đầu?')) {
          localStorage.removeItem('duyen_e12_progress');
          updateStats();
          renderTestsCards('all');
          alert('Đã đặt lại dữ liệu làm bài thành công!');
        }
      });
    }
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[m]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortal);
  } else {
    initPortal();
  }
})();
