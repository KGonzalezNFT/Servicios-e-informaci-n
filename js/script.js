let more = document.querySelectorAll('.more');

for (let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', function() {
        more[i].parentNode.classList.toggle('active')
    })
}

const toggleBtn = document.getElementById('toggle');

const getSheme = window.matchMedia('(prefers-color-sheme: dark)');

toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

function toggleDarkMode(state) {
    document.documentElement.classList.toggle('dark', state)
}

toggleDarkMode(getSheme.matches);

getSheme.addEventListener((evt) => toggleDarkMode(evt.matches));