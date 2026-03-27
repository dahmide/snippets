import { Field, FieldInput, FieldLabel } from "@/components/ui/field/Field";
import tokenCatalog from '@/tokens.json';

<>
    <Field className={classes.header__popoverContentSearch}>
        <FieldLabel className={classes.header__popoverContentSearchLabel}>
            <div className={classes.header__popoverContentSearchLabel}>
                <RiSearch2Line />
                <span className="sr-only">Search</span>
            </div>
<RotatingText suggestions={tokens?.map((token) => token.name)} />
            <Input
                id={id}
                type="search"
                placeholder="Search..."
                className={classes.header__popoverContentSearchLabel}
            />
            <Button
                variant="ghost"
                className={classes.header__popoverContentSearchLabel}>
                <RiSearch2Line />
                <span className="sr-only">Search</span>
            </Button>
        </FieldLabel>
    </Field>

    {tokens.length > 0 ? (
        <div className={classes.header__popoverContentTokens}>
            {tokens.map((token, index) => (
                <Button
                    className={classes.header__popoverContentTokensItem}
                    key={index}
                    onClick={() => null}>
   <div>                
 <img src={tokenCatalog.tokens[token.categoryId].imageUrl} />
</div>
<span>{token.name}</span>
                </Button>
            ))}
        </div>
    ) : (
        <div className={classes.header__popoverContentStatus}>isLoading...</div>
    )}
</>;