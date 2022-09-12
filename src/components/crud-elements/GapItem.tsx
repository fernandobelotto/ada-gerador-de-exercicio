import { DeleteIcon } from "@chakra-ui/icons"
import { Button, Flex, IconButton, Input, Text, VStack } from "@chakra-ui/react"

export function GapItem(props: any) {
    const index = props.index
    const register = props.register
    const fields = props.fields
    const remove = props.remove
    const append = props.append

    return (
        <>
            <Text fontWeight={600} p={2}>{index}</Text>
            <Input
                placeholder='texto da alternativa'
                size='sm' {...register(`alternatives.${index}.value`)}
            />

            <VStack spacing={2} align='flex-start'>
                {fields.map((item: any, index: any) => (
                    <Flex gap={1} key={item.id} align='center'>
                        
                        <IconButton
                            aria-label='delete'
                            icon={<DeleteIcon />}
                            size='sm'
                            type="button"
                            onClick={() => remove(index)}></IconButton>
                    </Flex>
                ))}
                <Button
                    type="button"
                    size='sm'
                    onClick={() => append({ hint: '', value: '' })}
                >
                    Novo gap
                </Button>
            </VStack>

            <Input
                placeholder="feedback da questão"
                size='sm' {...register(`alternatives.${index}.hint`)}
            />
        </>
    )
}

