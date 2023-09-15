/* const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
       await navigator.clipboard.writeText(link)
       alert("Copied the text: " + link)
    } catch (error) {
        console.error(error)
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))

*/

const shareButtons = document.querySelectorAll('.tile-share-button');
console.log(shareButtons);

async function share(e) {
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
       await navigator.share({
            url: link,
            title: document.title,
            text: "Lorem ipsum..."
        });
       
    } catch (error) {
        console.error(error);
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', share));
