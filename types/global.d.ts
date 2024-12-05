export {}

declare global {
    interface Regulator {
      username?: string
      staff_id?: string
      password?: string
      first_name?: string
      last_name? :string
      email?: string
      phone_number?: string
      role?: string
    }

    interface Operator {
      op_id?: number
      email?: string
      password?: string
      name?: string
      status?: string
      created_by?: string
      routes?: number[]
    }

    interface OperatorPersonnel {
      op_id?: string
      name?: string
      status?: string
      created_by?: string
      routes?: number[]
    }

    interface ButtonProps {
        className?: string
        size: "small" | "medium" | "large"
        variant: "primary" | "secondary" | "custom"
        text: string
        onClick: (...params?) => void
        customStyle?: string
        children?: any
        loading?: boolean
    }
    interface DropdownProps {
      title?: string
      options: any[]
      size: "small" | "medium" | "large"
      variant: "primary" | "secondary" | "custom"
      placeholder?: string
      onSelect?: (...params?) => void
      customStyle?: string
      children?: any
      loading?: boolean
    }
    interface TextInputProps {
        onChangeText: (...params?) => void
        icon?: string
        type?: string
        placeholder?: string
        value?: string
    }

    interface CreateOperatorForm {
      name:string
      routes:number[] 
      created_by:string
    }

    interface CreateFleetForm {
      fleet_id:string
      routes:number[]
    }

    interface MapProps extends DirectionProps {
      locations?: FleetLocation[]
      className?: string
      handleClickMarker?: (fleet_id:string) => void
    }

    interface DirectionProps {
      from?: string
      to?: string
      through?: string[]
      
    }

    interface FleetLocation {
      lat: number
      lng: number
      fleet_id:string
      type?: string
    }
    
}


export type MenuBarist = {
  title: string;
  id: number;
  icon: React.ReactElement;
  link: any;
};
export type AuthList = {
  title: string;
  description: string;
};
export type ActivitiesProps = {
  title: string;
  number: number;
  icon: React.ReactElement;
  id: number;
  color: string

};
export type ActivitiesTableProps = {
  operator: string;
  fleets: React.ReactElement;
  status: React.ReactElement;
  id: number;
  route: string
};

export type DriverRoutesProps = {
id?: number,
fleets?: string,
from?: string,
routesFro: string,
to?: string
routesTo: string,
time1?: string,
time2?: string,
}
export type PersonelProps = {
  id: number,
  name: string,
  img: React.ReactElement;
}
export type PaymentPlanList = {
  id: number;
  img: React.ReactElement;
};

export type QuestionOptions = {
  id: number;
  number: any;
  text: string;
  correctAns: string
 
};
export type ResultInterface = {
  id: string;
  isCorrect: boolean;
}
export type PowerResultInterface = {
  id: number;
  isCorrect: boolean;
}