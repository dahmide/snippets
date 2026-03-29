import { RiSearchLine, RiCloseLine as RiCancelLine, RiCornerDownLeftLine as RiReturnLine } from "react-icons/ri";

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
        @include size(var(--size));
        flex-shrink: 0;
    
  
  @include size(var(--size));
  border-radius: 50%;
  border: 4px dashed var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #f0f0f0;
  transition: border 0.4s ease;

  &:hover {
    border-style: solid;
    border-color: var(--border);
  }

  img {
    @include size(calc(var(--size) * 0.9));
    border-radius: 0;
    display: block;
  }
}
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
    
<style>


<button className={classes.item}>
      <div className={classes.logo}>
          <img src="" alt="" />
      </div>
      <div className={classes.info}>
          <span className={classes.name}>
              {token.name}
          </span>
          <span className={classes.code}>
              {token.name}
          </span>
      </div>
      <div className={classes.meta}>
          {formatNum()}
      </div>''
</button>
*/

className={classes.popover__fieldInnerLayout}
className={classes.popover__fieldInnerLayoutLabel}
className={classes.popover__fieldInnerLayoutInput}


{query ? `No results for ${query}` : "Loading..."}
