import { InputBase, Typography } from "@mui/material";
import { FormFieldProps } from "./types";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  // <>
  //   <input
  //     type={type}
  //     placeholder={placeholder}
  //     {...register(name, { valueAsNumber })}
  //   />
  //   {error && <span className="error-message">{error.message}</span>}
  // </>
  <>
  <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 1 }}>
            {placeholder}
          </Typography>
          <InputBase
            placeholder={placeholder}
            type={type}
            {...register(name, { valueAsNumber })}
            sx={{
              border: "1px solid #e5e7eb",
              bgcolor: "#faf9fb",
              width: "90%",
              borderRadius: "10px",
              p: "5px 10px",
              mb: 2,
            }}
          />
          {error && <span style={{marginTop: "-24px", color:"red"}}>{error.message}</span>}</>
);
export default FormField;