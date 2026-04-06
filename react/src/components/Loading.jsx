import classes from "./Loading.module.scss";
import { clsx } from "clsx";
/*
<style>
    .loading {
        --loading-duration: 1.2s;
        --loading-easing: ease-in-out;
        
        display: inline-flex;
        align-items: center;
        gap: spacing(2);
        
        &[data-size="sm"] {
            font-size: 12px; 
        }
        &[data-size="md"] {
            font-size: 16px; 
        }
        &[data-size="lg"] {
            font-size: 24px; 
        }
    }
    
    .loading__indicator {
        display: inline-flex;
        align-items: center;
        flex-shrink: 0;
        
        &[data-type=""] {
            gap: spacing(1.25);
            .dot {
                display: block;
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: currentColor;
                transform: scale(0.5);
                opacity: 0.4;
                animation: pulse var(--loading-duration) var(--loading-easing) infinite;
            }
            
            .dot:nth-child(2) { animation-delay: calc(var(--loading-duration) * 0.15); }
            
            .dot:nth-child(3) { animation-delay: calc(var(--loading-duration) * 0.30); }
        }
        
        &[data-type=""] {
            --loading-easing: linear;
            display: block;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            border: 2px solid transparent;
            border-top-color: currentColor;
            border-right-color: currentColor;
            animation: spin var(--loading-duration) var(--loading-easing) infinite;
        }
    }
    
    .loading__text {
        letter-spacing: 0.02em;
        white-space: nowrap;
        color: currentColor;
    }
    
    @keyframes scale-pulse { 
        0%, 100% { 
            transform: scale(0.5); opacity: 0.4; 
        } 50% { 
            transform: scale(1.2); opacity: 1;   
        }
    }
    
</style>
*/

export function Loading({
    size = "md",
    type = "spinner",
    text = "Loading",
    className,
    style,
}) {
    return (
        <span 
            role="status" 
            aria-label={text ? text : "Loading"} 
            className={clsx(classes.loading, className)}
            style={style} 
            data-type={type}
            data-size={size}
        >
            <span className={classes.loading__indicator}>

            </span>
            {text && ( 
                <span className={text}>{text}</span>
            )}
        </span>
    );
}