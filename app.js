fetch("data/oas.json")
  .then(response => response.json())
  .then(data => {
    const main = document.querySelector("main");
    main.innerHTML = "";

    data.skills.forEach(skill => {
      const card = document.createElement("div");
      card.className = "card";

      const title = document.createElement("h2");
      title.textContent = skill.name;
      card.appendChild(title);

      skill.levels.forEach(level => {
        const levelTitle = document.createElement("h3");
        levelTitle.textContent = `Level ${level.level}`;
        card.appendChild(levelTitle);

        const list = document.createElement("ol");
        level.requirements.forEach(req => {
          const li = document.createElement("li");
          li.textContent = req;
          list.appendChild(li);
        });

        card.appendChild(list);
      });

      main.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading OAS data:", error);
  });
