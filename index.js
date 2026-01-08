
const createElement = (arr) =>
  arr.map(el => `<span class="btn btn-sm">${el}</span>`).join(" ");

const loadLesson = () => {
  fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(data => displayLesson(data.data));
};

const removeActive = () => {
  document.querySelectorAll('.lesonBtn')
    .forEach(btn => btn.classList.remove("active"));
};

const lvelwords = (id) => {
  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then(res => res.json())
    .then(data => {
      removeActive();
      document.getElementById(`LesoonBtn${id}`).classList.add("active");
      displayWords(data.data);
    });
};

const loadwordDetails = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/word/${id}`);
  const data = await res.json();
  displayWdDetails(data.data);
};

const displayWdDetails = (wd) => {
  document.getElementById('detailsContainer').innerHTML = `
    <h2 class="text-2xl font-bold">${wd.word}</h2>
    <p><b>Meaning:</b> ${wd.meaning}</p>
    <p><b>Example:</b> ${wd.sentence}</p>
    <div class="flex flex-wrap gap-2">${createElement(wd.synonyms)}</div>
  `;
  document.getElementById('my_modal_5').showModal();
};

const displayWords = (words) => {
  const box = document.getElementById('word-container');
  box.innerHTML = "";

  if (!words.length) {
    box.innerHTML = `<p class="text-center col-span-full">No words found</p>`;
    return;
  }

  words.forEach(wd => {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="bg-white rounded-xl p-6 shadow text-center space-y-4">
        <h2 class="font-bold text-xl break-words">${wd.word}</h2>
        <p>${wd.meaning} / ${wd.pronunciation}</p>
        <button onclick="loadwordDetails(${wd.id})" class="btn btn-sm btn-primary">Details</button>
      </div>
    `;
    box.appendChild(div);
  });
};

const displayLesson = (lesson) => {
  const box = document.getElementById('levl-container');
  lesson.forEach(l => {
    box.innerHTML += `
      <button id="LesoonBtn${l.level_no}"
        onclick="lvelwords(${l.level_no})"
        class="btn btn-outline btn-primary lesonBtn">
        Learn ${l.level_no}
      </button>`;
  });
};

loadLesson();
