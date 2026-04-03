:where(.drawer) {
    --drawer-height: ;
    --drawer-swipe-duration: 400ms;
    --drawer-swipe-progress: ;
    --drawer-swipe-strength: ;
    --drawer-swipe-movement-x: ;
    --drawer-swipe-movement-y: ;
}

:where(.drawer__trigger) {}
:where(.drawer__content) {
    width: 100%;
    max-width: 32rem;
    margin: 0 auto;
}

:where(.drawer__backdrop) {
    --backdrop-opacity: 0.2;
    --bleed: 3rem;
    position: fixed;
    min-height: 100dvh;
    inset: 0;
    background-color: hsl(var(--background));
    opacity: calc(var(--backdrop-opacity) * (1 - var(--drawer-swipe-progress)));
    transition-duration: 450ms;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.32, 0.72, 0, 1);
    
    &[data-swiping] {
        transition-duration: 0ms;
    }
    
    &[data-ending-style] {
        transition-duration: calc(var(--drawer-swipe-strength) * var(--drawer-swipe-duration));
    }
    
    &[data-starting-style],
    &[data-ending-style] {
        opacity: 0;
    }
    
    /* iOS 26+: Ensure the backdrop covers the entire visible viewport. */
    @supports (-webkit-touch-callout: none) {
        position: absolute;
    }
}

:where(.drawer__viewport) {
    --viewport-padding: 0px;
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: flex-end;
    padding: var(--viewport-padding);
    
    @supports (-webkit-touch-callout: none) {
        --viewport-padding: #{spacing(2.5)};
    }
}


:where(.drawer__popup) {
    --bleed: 3rem;
    width: calc(20rem + var(--bleed));
    max-width: calc(100vw - 3rem + var(--bleed));
    height: 100%;
    padding: spacing(5);
    padding-right: calc(spacing(5) + var(--bleed));
    margin-right: calc(-1 * var(--bleed));
    outline: 1px solid hsl(var(--border));
    background-color: hsl(var(--background) / 0.5);
    color: hsl(var(--foreground) / 0.5);
    overflow-y: auto;
    overscroll-behavior: contain;
    touch-action: auto;
    transition: transform 450ms cubic-bezier(0.32, 0.72, 0, 1);
    will-change: transform;
    transform: translateX(var(--drawer-swipe-movement-x));
    
    &[data-swiping] {
        user-select: none;
    }
    
    &[data-starting-style],
    &[data-ending-style] {
transform: translateX(calc(100% - var(--bleed) + var(--viewport-padding) + 2px));
  
    }
    
    &[data-ending-style] {
        transition-duration: calc(var(--drawer-swipe-strength) * var(--drawer-swipe-duration));
    }
    
    @supports (-webkit-touch-callout: none) {
        --bleed: 0px;
        margin-right: 0;
        border-radius: var(--radius-sm);
    }
}
