import ForgeUI, {CustomField, CustomFieldEdit, Fragment, Range, Text, render, useProductContext} from "@forge/ui";

const BAR_LENGTH = 5;

const View = () => {

    const fieldValue = useProductContext().extensionContext.fieldValue || 0;
    const progressBar = "★".repeat(fieldValue).padEnd(BAR_LENGTH, "☆") + ` (${fieldValue})`;

    return (
        <CustomField>
            <Text content={`${progressBar}`}/>
        </CustomField>
    );
};

const Edit = () => {

  const fieldValue = useProductContext().extensionContext.fieldValue;

  const onSubmit = values => {
      return Number(values.satisfaction)
  };

  return (
    <CustomFieldEdit onSubmit={onSubmit} header="How was our service for this request?">
        <Fragment>
            <Range
                label="Very poor >>>>>>>>>>>>>>>>>>>>>>>> Very good"
                defaultValue={fieldValue}
                name="satisfaction"
                min={1}
                max={5}
                step={1}
            />
        </Fragment>
    </ CustomFieldEdit>
  );
}

export const runView = render(<View/>);
export const runEdit = render(<Edit/>);