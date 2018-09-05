function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
	const r = document.querySelectorAll('.ranked-list')
    for (let i = 0; i < parseInt(r.length); i++) {
      r[i].innerHTML = (i + 1).toString()
    }
}

function deepestChild() {
  return document.getElementById("grand-node").querySelector("div div div")
}

