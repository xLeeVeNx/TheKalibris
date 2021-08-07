const accountsList = document.getElementById('cryptocurrency');

const copyText = event => {
    const target = event.target;

    if (target.closest('.accounts__wallet-btn')) {
        const temp = target.closest('.accounts__wallet-btn').previousElementSibling;
        const range = new Range();

        range.selectNode(temp);

        document.getSelection().removeAllRanges();
        document.getSelection().addRange(range);
        document.execCommand('copy');
    }
};

accountsList.addEventListener('click', copyText);