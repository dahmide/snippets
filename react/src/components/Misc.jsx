import { 
  RiSearchLine,
  RiCloseLine as RiCancelLine,
  RiCornerDownLeftLine as RiSelectLine
} from "react-icons/ri";

&#128293;

<style>
.item {
      cursor: pointer;
      margin: 0, spacing(1);
      padding: spacing(1.5), spacing(2.5);
      display: flex;
      align-items: center;
      gap: spacing(2.5);
      border-radius: var(--radius-sm);
      
      &__logo {
        --size: 32px;
        flex-shrink: 0;
      }
      &__info {
        flex-shrink: 0;
        min-width: 0;
        
        &Name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: color 0.15s;
        }
        &Code {
          margin-top: spacing(0.25);
        }
      }
      &__meta {
        flex-shrink: 0;
        text-align: right;
        letter-spacing: -0.02em;
      }
    }
    
</style>

<button key={index} className={classes.popover__panelTokensItem}>
  <div className={classes.popover__panelTokensLogo}>
    <img src="" alt="" />
  </div>
  <div className={classes.popover__panelTokensInfo}>
    <span className={classes.popover__panelTokensInfoName}>
      {token.name}
    </span>
    <span className={classes.popover__panelTokensInfoCode}>
      {token.name}
    </span>
  </div>
  <div className={classes.popover__panelTokensMeta}>
    {formatNum(1)}
  </div>
</button>

className={classes.popover__fieldInnerLayout}
className={classes.popover__fieldInnerLayoutLabel}
className={classes.popover__fieldInnerLayoutInput}


{query ? `No results for ${query}` : "Loading..."}
