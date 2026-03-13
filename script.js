const pupils = document.querySelectorAll(".pupil");

document.addEventListener("mousemove",
    (e) => {
        pupils.forEach((pupil) => {
            const eye = pupil.parentElement
            const rect = eye.getBoundingClientRect()

            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX)

            const moveX = Math.cos(angle) * 15
            const moveY = Math.sin(angle) * 15

            pupil.style.transform = `translate(${moveX}px, ${moveY}px)`
        })
    }
)