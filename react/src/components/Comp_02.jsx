export default function TokenCard() {
    return (
        <div className={classes.tc}>
            <div className={classes.tc__upper}>
                <div className={classes.tc__upperInfo}>
                    <div className={classes.tc__upperInfoLogo}>
                        <img src={imageUrl} alt={name} />
                </div>
                <h3 className={classes.tc__upperInfoName}>{name}</h3>
            </div>
            <div className={classes.tc__upperMeta}>
                <span className={classes.tc__upperMetaToken}></span>
                <span className={classes.tc__upperMetaValue}>{formatAmt(1)}</span>
            </div>
        </div>
        <div className={classes.tc__lower}>
            <div className={classes.tc__lowerLeft}>
                Remaining
                {formatNum(1)}
            </div>
            <div className={classes.tc__lowerUsed}>
                {formatNum(1)}
            </div>
        </div>
    </div>
)
}



export function TokenForm() {
    return (
        <form className={classes.tf} aria-labelledby="form-legend" aria-describedby="form-detail">
            <div id="form-legend" className={classes.tf__legend}>
                <span className={classes.tf__legendLabel}></span>
                <span className={classes.tf__legendTotal}></span>
            </div>
            <div className={classes.tf__layout}>
                <div className={classes.tf__layoutInfo}>
                    <div className={classes.tf__layoutInfoLogo}>
                        <img alt={imageUrl} alt={name} />
                </div>
                <div className={classes.tf__layoutInfoName}>
                    {name}
                </div>
            </div>
            <div className={classes.tf__layoutWrap}>
                <FieldLabel className={classes.tf__layoutWrapLabel}>Balance</FieldLabel>
                <FieldInput className={classes.tf__layoutWrapInput} aria-describedBy="form-helper" />
            </div>
        </div>
        <div id="form-detail" className={classes.tf__detail}></div>
        <Button className={classes.tf__submit}></Button>
        <div id="form-helper" className={classes.tf__helper}></div>
    </form>
)
}


