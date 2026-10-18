/**
 * ==========================================================
 * SHARED NAVIGATION & SYNC - HỆ THỐNG ĐỀ CƯƠNG TIẾNG ANH 12
 * Giáo viên thiết kế: Ms. Duyên | Global Success Grade 12
 * ==========================================================
 */

(function () {
  'use strict';

  const TESTS_CATALOG = [
    {
      group: "TEST 01",
      items: [
        { file: "e12-test01-listening-part1.html", title: "🎧 Test 01 - Listening Part 1 (Walt Disney)" },
        { file: "e12-test01-listening-part1-vocab.html", title: "🗂 Test 01 - Từ vựng Part 1" },
        { file: "e12-test01-listening-part2.html", title: "🎧 Test 01 - Listening Part 2 (Exercise 14)" },
        { file: "e12-test01-listening-part2-vocab.html", title: "🗂 Test 01 - Từ vựng Part 2" },
        { file: "e12-test01-reading-q1-5.html", title: "📖 Test 01 - Reading Q1–5" },
        { file: "e12-test01-reading-q14-18.html", title: "📖 Test 01 - Reading Q14–18" },
        { file: "e12-test01-reading-q19-24.html", title: "📖 Test 01 - Reading Q19–24" }
      ]
    },
    {
      group: "TEST 02",
      items: [
        { file: "e12-test02-listening-part1.html", title: "🎧 Test 02 - Listening Part 1" },
        { file: "e12-test02-listening-part1-vocab.html", title: "🗂 Test 02 - Từ vựng Part 1" },
        { file: "e12-test02-listening-part2.html", title: "🎧 Test 02 - Listening Part 2" },
        { file: "e12-test02-listening-part2-vocab.html", title: "🗂 Test 02 - Từ vựng Part 2" },
        { file: "e12-test02-reading-q9-13.html", title: "📖 Test 02 - Reading Q9–13" },
        { file: "e12-test02-reading-q14-18.html", title: "📖 Test 02 - Reading Q14–18" },
        { file: "e12-test02-reading-q19-24.html", title: "📖 Test 02 - Reading Q19–24" }
      ]
    },
    {
      group: "TEST 03",
      items: [
        { file: "e12-test03-reading-q6-10.html", title: "📖 Test 03 - Reading Q6–10" },
        { file: "e12-test03-reading-q11-15.html", title: "📖 Test 03 - Reading Q11–15" }
      ]
    }
  ];

  const currentPath = window.location.pathname;
  const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'e12-test01-listening-part1.html';

  function injectSharedBar() {
    if (document.getElementById('duyen-shared-bar')) return;

    const nav = document.createElement('div');
    nav.id = 'duyen-shared-bar';

    let dropdownHtml = '';
    TESTS_CATALOG.forEach(group => {
      dropdownHtml += `<div class="dsb-group-title">${group.group}</div>`;
      group.items.forEach(item => {
        const isActive = currentFile.toLowerCase() === item.file.toLowerCase();
        dropdownHtml += `
          <a href="${item.file}" class="dsb-item ${isActive ? 'active' : ''}">
            <span>${item.title}</span>
            ${isActive ? '<span>📍</span>' : ''}
          </a>
        `;
      });
    });

    const studentName = localStorage.getItem('duyen_e12_student_name') || 'Chưa nhập';
    const studentClass = localStorage.getItem('duyen_e12_student_class') || '';
    const studentLabel = studentName !== 'Chưa nhập' ? `${studentName}${studentClass ? ' (' + studentClass + ')' : ''}` : 'Chưa nhập tên';

    nav.innerHTML = `
      <div class="dsb-container">
        <div class="dsb-left">
          <a href="../index.html" class="dsb-home-btn" title="Quay về trang chủ hệ thống">
            <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            <span>Trang Chủ</span>
          </a>

          <div class="dsb-test-selector-wrapper">
            <button class="dsb-select-trigger" id="dsbToggleDropdown" type="button">
              <span>📚 Danh sách 16 bài</span>
              <span style="font-size: 10px;">▼</span>
            </button>
            <div class="dsb-dropdown" id="dsbDropdown">
              ${dropdownHtml}
            </div>
          </div>
        </div>

        <div class="dsb-right">
          <div class="dsb-student-badge" id="dsbStudentBadge" title="Thông tin học sinh được lưu tự động">
            <span>👤 Học sinh:</span>
            <strong id="dsbBadgeName">${studentLabel}</strong>
          </div>
          <a href="../index.html#results" class="dsb-home-btn" style="background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.2);" title="Xem bảng điểm và chứng nhận">
            🏆 Bảng điểm
          </a>
        </div>
      </div>
    `;

    document.body.insertAdjacentElement('afterbegin', nav);

    const trigger = document.getElementById('dsbToggleDropdown');
    const dropdown = document.getElementById('dsbDropdown');
    if (trigger && dropdown) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
      });
      document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
          dropdown.classList.remove('show');
        }
      });
    }
  }

  function syncStudentInfo() {
    const nameKeys = ['studentName', 'student', 'name'];
    const classKeys = ['studentClass', 'classroom', 'className', 'class', 'cls'];

    let nameInput = null;
    let classInput = null;

    for (const k of nameKeys) {
      const el = document.getElementById(k);
      if (el) { nameInput = el; break; }
    }
    for (const k of classKeys) {
      const el = document.getElementById(k);
      if (el) { classInput = el; break; }
    }

    const savedName = localStorage.getItem('duyen_e12_student_name');
    const savedClass = localStorage.getItem('duyen_e12_student_class');

    if (nameInput) {
      if (savedName && !nameInput.value.trim()) {
        nameInput.value = savedName;
        nameInput.dispatchEvent(new Event('input', { bubbles: true }));
        nameInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
      nameInput.addEventListener('input', () => {
        const val = nameInput.value.trim();
        if (val) {
          localStorage.setItem('duyen_e12_student_name', val);
          updateBadge();
        }
      });
    }

    if (classInput) {
      if (savedClass) {
        if (classInput.tagName === 'SELECT') {
          let found = false;
          for (let opt of classInput.options) {
            if (opt.value === savedClass || opt.text === savedClass) {
              classInput.value = opt.value;
              found = true;
              break;
            }
          }
          if (!found) {
            const newOpt = new Option(savedClass, savedClass);
            classInput.add(newOpt);
            classInput.value = savedClass;
          }
        } else if (!classInput.value.trim()) {
          classInput.value = savedClass;
        }
        classInput.dispatchEvent(new Event('change', { bubbles: true }));
      }

      classInput.addEventListener('change', () => {
        const val = classInput.value.trim();
        if (val) {
          localStorage.setItem('duyen_e12_student_class', val);
          updateBadge();
        }
      });
    }
  }

  function updateBadge() {
    const badgeName = document.getElementById('dsbBadgeName');
    if (!badgeName) return;
    const name = localStorage.getItem('duyen_e12_student_name');
    const cls = localStorage.getItem('duyen_e12_student_class');
    if (name) {
      badgeName.textContent = `${name}${cls ? ' (' + cls + ')' : ''}`;
    } else {
      badgeName.textContent = 'Chưa nhập tên';
    }
  }

  function setupResultObserver() {
    const scoreElements = [
      document.getElementById('score'),
      document.getElementById('finalScore'),
      document.getElementById('resultScore'),
      document.getElementById('scoreDisplay'),
      document.getElementById('scoreText')
    ].filter(Boolean);

    function recordResult() {
      let scoreText = '';
      for (const el of scoreElements) {
        if (el && el.textContent.trim()) {
          scoreText = el.textContent.trim();
          break;
        }
      }

      if (!scoreText) return;

      const progress = JSON.parse(localStorage.getItem('duyen_e12_progress') || '{}');
      const studentName = localStorage.getItem('duyen_e12_student_name') || 'Học sinh';

      let testTitle = document.title || currentFile;
      for (const g of TESTS_CATALOG) {
        for (const it of g.items) {
          if (it.file.toLowerCase() === currentFile.toLowerCase()) {
            testTitle = it.title;
            break;
          }
        }
      }

      progress[currentFile] = {
        title: testTitle,
        scoreText: scoreText,
        studentName: studentName,
        completedAt: new Date().toLocaleString('vi-VN'),
        timestamp: Date.now()
      };

      localStorage.setItem('duyen_e12_progress', JSON.stringify(progress));
    }

    scoreElements.forEach(el => {
      const observer = new MutationObserver(() => {
        if (el.textContent.trim()) {
          recordResult();
        }
      });
      observer.observe(el, { childList: true, characterData: true, subtree: true });
    });

    document.querySelectorAll('button').forEach(btn => {
      const txt = (btn.textContent || '').toLowerCase();
      if (txt.includes('nộp bài') || txt.includes('check') || txt.includes('hoàn thành') || txt.includes('submit')) {
        btn.addEventListener('click', () => {
          setTimeout(recordResult, 600);
          setTimeout(recordResult, 1500);
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      injectSharedBar();
      syncStudentInfo();
      setupResultObserver();
    });
  } else {
    injectSharedBar();
    syncStudentInfo();
    setupResultObserver();
  }
})();
