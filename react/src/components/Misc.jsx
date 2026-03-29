function Highlight({ text, query }) {
  if (!query) return <span>{text}</span>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <span>{text}</span>;
  return (
    <span>
      {text.slice(0, idx)}
      <mark style={{ background: "#e8b86d28", color: "#e8b86d", borderRadius: "2px", padding: "0 1px" }}>
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </span>
  );
}


/*
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
    
    */

export function formatNumber (number, locale = "en-US", decimals = 2) {
  
 return  number.toLocaleString(locale, { minimumFractionDigits: decimals });
}
/*


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

/*
  .highlight {
background-color: hsl(var(--primary / 0.2));
color: hsl(var(--primary));
border-radius: var(--radius-xs);
padding: 0 spacing(0.25);

}

*/

/* No results for "{query}"*/

const results = tokens.filter((token) =>
  ["name"].some((key) =>
    token[key].toLowerCase().includes(query.toLowerCase())
  )
);
