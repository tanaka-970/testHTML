// 目次ツリーと検索を toc.js の DOCS_TOC から組み立てる
(function () {
  var root = document.body.getAttribute("data-root") || "";
  var here = location.pathname.replace(/\\/g, "/");

  function isCurrent(href) {
    var a = document.createElement("a");
    a.href = root + href;
    return a.pathname.replace(/\\/g, "/") === here;
  }

  function buildList(items) {
    var ul = document.createElement("ul");
    items.forEach(function (item) {
      var li = document.createElement("li");
      if (item.children) {
        var details = document.createElement("details");
        var summary = document.createElement("summary");
        summary.textContent = item.title;
        details.appendChild(summary);
        var child = buildList(item.children);
        details.appendChild(child);
        if (child.querySelector("a.current")) details.open = true;
        li.appendChild(details);
      } else {
        var a = document.createElement("a");
        a.href = root + item.href;
        a.textContent = item.title;
        if (isCurrent(item.href)) a.className = "current";
        li.appendChild(a);
      }
      ul.appendChild(li);
    });
    return ul;
  }

  var nav = document.querySelector(".side-nav");
  if (nav && window.DOCS_TOC) nav.appendChild(buildList(window.DOCS_TOC));

  var form = document.querySelector(".site-header form");
  if (form) form.action = root + "search.html";

  // 検索ページ
  var results = document.querySelector(".search-results");
  if (!results || !window.DOCS_TOC) return;

  var query = new URLSearchParams(location.search).get("q") || "";
  var input = document.querySelector(".site-header input[type=search]");
  if (input) input.value = query;
  var words = query.toLowerCase().split(/\s+/).filter(Boolean);

  var flat = [];
  (function walk(items, path) {
    items.forEach(function (item) {
      var p = path.concat(item.title);
      if (item.href) flat.push({ item: item, path: p });
      if (item.children) walk(item.children, p);
    });
  })(window.DOCS_TOC, []);

  var hits = flat.filter(function (e) {
    var text = (e.path.join(" ") + " " + (e.item.keywords || "") + " " + (e.item.summary || "")).toLowerCase();
    return words.length && words.every(function (w) { return text.indexOf(w) >= 0; });
  });

  var heading = document.querySelector(".search-count");
  if (heading) heading.textContent = words.length ? "「" + query + "」の検索結果：" + hits.length + " 件" : "キーワードを入力してください。";

  hits.forEach(function (e) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = root + e.item.href;
    a.textContent = e.item.title;
    li.appendChild(a);
    var path = document.createElement("div");
    path.className = "path";
    path.textContent = e.path.slice(0, -1).join(" > ");
    li.appendChild(path);
    if (e.item.summary) {
      var s = document.createElement("div");
      s.textContent = e.item.summary;
      li.appendChild(s);
    }
    results.appendChild(li);
  });
})();
