import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Checkbox, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, IconButton, Input, Select, Textarea, VStack } from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import { downloadFile } from "../../service/download";
import { MultipleChoiceType } from "../../types/multiple-choice";


export default function MultipleChoiceForm() {
    const {
        handleSubmit,
        register,
        control,
        formState: { errors, isSubmitting },
    } = useForm<MultipleChoiceType>();


    const { fields, append, remove } = useFieldArray({
        control,
        name: "alternatives"
    });


    function onSubmit(values: any) {
        const generatedForm = {
            ...values,
            type: "MULT",
            interpreter: 1,
        }

        downloadFile(generatedForm)
    }


    //   SKU: string;
    //   interpreter: number;
    //   type: string;
    //   language: string; => select
    //   tagsOrConcepts: string[]; => tag input
    //   text: string[]; => text area e quebrar com \n
    //   fazer um component crud que o usuario como adicionar e deletar alternativas
    //   alternatives: Alternative[];

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing={3}>

                    <FormControl
                        isInvalid={!!errors.SKU}
                    >
                        <FormLabel htmlFor="SKU">SKU</FormLabel>
                        <Input
                            id="SKU"
                            placeholder="SKU"
                            {...register("SKU", {
                                required: "This is required",
                                minLength: { value: 4, message: "Minimum length should be 4" },
                            })}
                        />
                        <FormHelperText>SKU do módulo</FormHelperText>

                        {errors?.SKU?.message && (
                            <FormErrorMessage>{errors.SKU.message}</FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl
                        isInvalid={!!errors.language}
                    >
                        <FormLabel>Linguage</FormLabel>
                        <Select
                            placeholder="Select option"
                            {...register("language", {
                                required: "This is required",
                            })}
                        >
                            <option value="java">java</option>
                            <option value="csharp">csharp</option>
                            <option value="javascript">javascript</option>
                            <option value="typescript">typescript</option>
                            <option value="python">python</option>
                            <option value="kotlin">kotlin</option>
                            <option value="clojure">clojure</option>
                        </Select>
                        <FormHelperText>Selecione uma linguagem</FormHelperText>
                        {errors?.language?.message && (
                            <FormErrorMessage>{errors.language.message}</FormErrorMessage>
                        )}
                    </FormControl>




                    <FormControl
                        isInvalid={!!errors.text}
                    >
                        <FormLabel>Enunciado</FormLabel>
                        <Textarea
                            {...register("text", {
                                required: "This is required",
                            })}
                            placeholder=""
                        />
                        <FormHelperText>enunciado da questão, optamos por usar uma lista de linhas</FormHelperText>
                        {errors?.text?.message && (
                            <FormErrorMessage>{errors.text.message}</FormErrorMessage>
                        )}
                    </FormControl>


    
                



                    <Button
                        mt={4}
                        colorScheme="teal"
                        isLoading={isSubmitting}
                        type="submit"
                    >
                        Gerar exercício
                    </Button>
                </VStack>
            </form>


        </>
    )
}
