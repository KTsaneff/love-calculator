function calculateLove() {
    const name1 = document.getElementById("name1").value.trim().toLowerCase();
    const name2 = document.getElementById("name2").value.trim().toLowerCase();
    const result = document.getElementById("result");

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
        return;
    }

    const combinedNames = name1 + name2;
    let hash = 0;
    for (let i = 0; i < combinedNames.length; i++) {
        hash += combinedNames.charCodeAt(i);
    }

    const sameFirstLetter = name1.charAt(0) === name2.charAt(0) ? 5 : 0;
    const lengthSimilarity = Math.abs(name1.length - name2.length) <= 2 ? 5 : 0;

    let lovePercentage = (hash % 61) + 20 + sameFirstLetter + lengthSimilarity;
    if (lovePercentage > 100) lovePercentage = 100;

    let message = "";
    if (lovePercentage < 40) {
        const messages = [
            "Not a great match. Chemistry is weak.",
            "Maybe friends... but love? Hmm...",
            "Stars aren't aligned for this pair."
        ];
        message = messages[Math.floor(Math.random() * messages.length)];
    } else if (lovePercentage < 70) {
        const messages = [
            "There’s potential. Let love grow!",
            "You two might surprise everyone.",
            "It’s worth a shot – go on a date!"
        ];
        message = messages[Math.floor(Math.random() * messages.length)];
    } else {
        const messages = [
            "A perfect match! Love is real 💖",
            "Soulmates, no doubt!",
            "Hearts synced. Keep it forever!"
        ];
        message = messages[Math.floor(Math.random() * messages.length)];
    }

    result.innerHTML = `
        <strong>${capitalize(name1)} and ${capitalize(name2)}</strong>'s Love Score: 
        <span style="color:red; font-size: 1.2em;">${lovePercentage}%</span><br>
        ${message}
    `;
}

function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
