import { DeleteIcon } from "@chakra-ui/icons";
import { FormLabel, VStack, Flex, Input, Checkbox, IconButton, Button } from "@chakra-ui/react";
import { Alternative } from "../crud-elements/Alternative";

export default function AlternativeList({ fields, register, remove, append }: any) {



    return (
        <>
            <VStack spacing={2} align='flex-start'>
                {fields.map((item: any, index: any) => (
                    <Flex gap={1} key={item.id} align='center'>

                        <Alternative index={index} register={register} />
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
                    onClick={() => append({ correct: true, text: 'adsf', feedback: 'feedback' })}
                >
                    Nova alternativa
                </Button>
            </VStack>
        </>
    )
}
