

<style>
.item {
      cursor: pointer;
      margin: 0, 4px;
      padding: 6px, 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      border-radius: 9px;
      
      &__logo {
        --size: 32px;
        flex-shrink: 0;
        border-radius: 8px;
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
          margin-top: 1px;
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



{query ? `No results for ${query}` : "Loading..."}
