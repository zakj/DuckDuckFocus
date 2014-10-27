if (window.top === window && /^\?q=/.test(location.search)) {
    document.querySelector('[tabindex="1"]').focus();
    document.body.dispatchEvent(new Event('click'));
}
