import { Checkbox, Input, Text } from "@chakra-ui/react"

export function Alternative(props: any) {
    const index = props.index
    const register = props.register
    return (
        <>
            <Text fontWeight={600} p={2}>{index}</Text>
            <Input
                placeholder='texto da alternativa'
                size='sm' {...register(`alternatives.${index}.text`)} />
            <Input
                placeholder="feedback da questão"
                size='sm' {...register(`alternatives.${index}.feedback`)} />
            <Checkbox
                {...register(`alternatives.${index}.correct`)}
            >
                correta
            </Checkbox>
        </>
    )
}