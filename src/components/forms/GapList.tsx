import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton, propNames, VStack } from "@chakra-ui/react";
import { useFieldArray } from "react-hook-form";
import { GapItem } from "../crud-elements/GapItem";

export default function GapList({ fields, register, remove, append, control }: any) {


    return (
        <>
            <VStack spacing={2} align='flex-start'>
                {fields.map((item: any, index: any) => (
                    <Flex gap={1} key={item.id} align='center'>
                        <GapItem
                            index={index}
                            register={register}
                        />
                        <IconButton
                            aria-label='delete'
                            icon={<DeleteIcon />}
                            size='sm'
                            type="button"
                            onClick={() => remove(index)}
                        />
                    </Flex>
                ))}
                <Button
                    type="button"
                    size='sm'
                    onClick={() => append({
                        expected: "", feedbacks: [{ value: "", text: "" }]
                    })}
                >
                    Novo gap
                </Button>
            </VStack>
        </>
    )
}
