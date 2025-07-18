const form = document.getElementById("registrationForm");
    const eventList = document.getElementById("eventList");
    const searchBar = document.getElementById("searchBar");
    let events = [];

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const eventName = document.getElementById("eventName").value.trim();
      const timeRemaining = parseInt(document.getElementById("timeRemaining").value, 10);

      // التحقق من صحة الإدخال
      if (eventName === "") {
        alert("يجب إدخال اسم الحدث.");
        return;
      }

      if (isNaN(timeRemaining) || timeRemaining <= 0) {
        alert("يجب أن تكون المدة رقمًا موجبًا.");
        return;
      }

      const eventId = Date.now(); // معرف فريد للحدث
      const eventObj = {
        id: eventId,
        name: eventName,
        timeLeft: timeRemaining,
        intervalId: null,
        timeoutId: null
      };

      
      const eventEl = document.createElement("div");
      eventEl.className = "event";
      eventEl.dataset.id = eventId;

      const titleEl = document.createElement("div");
      titleEl.textContent = `الحدث: ${eventName}`;

      const countdownEl = document.createElement("div");
      countdownEl.className = "countdown";
      countdownEl.textContent = `الوقت المتبقي: ${eventObj.timeLeft} ثانية`;

      eventEl.appendChild(titleEl);
      eventEl.appendChild(countdownEl);
      eventList.appendChild(eventEl);

      events.push({ ...eventObj, element: eventEl, countdownEl });

      
        eventObj.intervalId = setInterval(() => {
        eventObj.timeLeft--;
        if (eventObj.timeLeft > 0) {
          countdownEl.textContent = `الوقت المتبقي: ${eventObj.timeLeft} ثانية`;
        }
      }, 1000);

    
      eventObj.timeoutId = setTimeout(() => {
        clearInterval(eventObj.intervalId);
        countdownEl.textContent = `الحدث "${eventObj.name}" قد بدأ!`;
        countdownEl.classList.add("started");
      }, eventObj.timeLeft * 1000);
    });

    
    searchBar.addEventListener("input", () => {
      const query = searchBar.value.toLowerCase();
      events.forEach(evt => {
        if (evt.name.toLowerCase().includes(query)) {
          evt.element.style.display = "block";
        } else {
          evt.element.style.display = "none";
        }
      });
    });