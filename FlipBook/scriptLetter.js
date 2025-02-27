window.onload = () => {
    const recommendPanel = document.querySelector('#recommendedArea')
    fetch('/recommend')
    .then((req) => req.text())
    .then((recomendation) => {
        const reformedList = recomendation.replaceAll('\r\n\r\n', "<br>")
        .replaceAll(/\.\s*"/g, "<b>.  ").replaceAll('\"', "</b>")
        recommendPanel.innerHTML = reformedList
    })
}

