const init = () => {
  createUl(MENU_CONTENT, document.body);

  const ul = document.querySelector("ul");

  ul.style.marginTop = "60px";

  ul.addEventListener("click", clickUlHandler);
};

const createUl = (_list, parent) => {
  const ul = document.createElement("ul");

  if (Array.isArray(_list)) {
    for (let i = 0; i < _list.length; i++) {
      const li = document.createElement("li");

      const withChildren = Array.isArray(_list[i].value);

      li.innerHTML =
        _list[i].name && !withChildren
          ? generateLink(_list[i].name)
          : generateItem(withChildren ? "-" : "•", _list[i].name || _list[i]);

      if (withChildren) createUl(_list[i].value, li);

      ul.appendChild(li);
    }
  }

  parent.appendChild(ul);
};

function clickUlHandler(e) {
  e.stopPropagation();

  const {
    nodeName,
    parentNode: { lastElementChild, children },
  } = e.target;

  if (nodeName !== "P" || [...children].length === 1 || !lastElementChild) return;

  e.target.open = !e.target.open;

  if (e.target.open) lastElementChild.classList.add("hidden");
  else lastElementChild.classList.remove("hidden");

  const opened_icon = e.target.getAttribute("icon-opened") === "-" ? "+" : "-";

  e.target.setAttribute("icon-opened", opened_icon);
}

const generateLink = (name) =>
  `<a href="/"><p class="menu_item openedMenu" icon-opened="+">${name}</p></a>`;

const generateItem = (icon_opened, name) =>
  `<p class="menu_item openedMenu" icon-opened="${icon_opened}">${name}</p>`;

init();
