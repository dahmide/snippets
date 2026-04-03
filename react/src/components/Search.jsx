export function Demo() {
    return (
        <>
            {isMobile ? (
                <>
                    <div className={classes.search__drawerContent}>
                        <DialogClose className={clsx(clasess.search__drawerClose, "icon")}>
                            <RiCancelLine />
                        </DialogClose>
                        <SearchField 
                            dummy="Search fund tokens" 
                            query={query} 
                            setDummy={setDummy} 
                            setQuery={setQuery} 
                        />
                        <DialogClose className={clsx(clasess.search__drawerClose, "text")}>
                            Close
                        </DialogClose>
                    </div>
                    <SearchPanel 
                        items={filteredTokenSeen} 
                        onItemSelect={onTokenSelect} 
                    />
                </>
            ) : (
                <>
                    <SearchField 
                        dummy="Search fund tokens" 
                        query={query} 
                        setDummy={setDummy} 
                        setQuery={setQuery} 
                    />
                    <SearchPanel 
                        items={filteredTokenSeen}
                        onItemSelect={onTokenSelect} 
                    />
                </>
            )}
        </>
    )
}