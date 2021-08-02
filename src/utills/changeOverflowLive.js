export default function ChangeOverflowLive(moreOptions) {
    const live = document.querySelector(`#live`);
    if (moreOptions) {
        live.style.overflow = "auto"
    } else {
        live.style.overflow = "hidden"
    }
    window.scrollTo(0, 0);
    live.scrollTo(0, 0);
}