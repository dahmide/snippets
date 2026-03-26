import classes from "./";
import { RiSearch2Line } from "react-icons/ri";

const InputStartIconDemo = () => {
    const id = useId();
    return (
        <div className="w-full max-w-xs space-y-2">
            <Label htmlFor={id}>Input with start icon</Label>
            <div className="relative">
                <div className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50">
                    <UserIcon className="size-4" />
                    <span className="sr-only">User</span>
                </div>
                <Input
                    id={id}
                    type="text"
                    placeholder="Username"
                    className="peer pl-9"
                />
            </div>
        </div>
    );
};

export default InputStartIconDemo;
