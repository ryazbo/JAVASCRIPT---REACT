interface FilterOption {
    label: string;
    value: any;
}

interface AdvancedFilterProps {
    options: FilterOption[];
    isActiveButtonText: boolean;
}


const Option = ({ isActiveButtonText }: AdvancedFilterProps) => {


    console.log("boton activo?",isActiveButtonText )

    return (
        <div>
           <option></option>
        </div>

    );
}


export default Option;