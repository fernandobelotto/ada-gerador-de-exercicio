import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Button, Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel, Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper, Select, Textarea,
  Tooltip,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { downloadFile } from "../../service/download";
import { TrueOrFalseType } from "../../types/true-or-false";
import { ChakraTagInput } from "../input-tag/InputTag";
import AlternativeList from "./AlternativeList";


export default function TrueOrFalseForm() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TrueOrFalseType>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "alternatives"
  });

  const [exercisenumber, setExercisenumber] = useState(0)

  function onSubmit(values: any) {
    const generatedForm = {
      ...values,
      type: "VR",
      text: values.text.split(/\r?\n/),
      interpreter: 1,
    }
    downloadFile(generatedForm, values.SKU + "_" + exercisenumber)
  }

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
                required: "Esse campo é obrigatório",
              })}
            />
            {errors?.SKU?.message && (
              <FormErrorMessage>{errors.SKU.message}</FormErrorMessage>
            )}
            <FormHelperText>SKU do módulo</FormHelperText>
          </FormControl>
          <FormControl
            isInvalid={!!errors.language}
          >
            <FormLabel>Linguagem</FormLabel>
            <Select
            colorScheme="green"
              placeholder="selecione uma linguagem"
              {...register("language", {
                required: "Esse campo é obrigatório",
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
            {errors?.language?.message && (
              <FormErrorMessage>{errors.language.message}</FormErrorMessage>
            )}
            <FormHelperText>Selecione uma linguagem</FormHelperText>
          </FormControl>
          <FormControl
            isInvalid={!!errors.text}
          >
            <FormLabel>Lista de conceitos</FormLabel>
            <Controller
              control={control}
              name={'tagsOrConcepts'}
              rules={{
                required: "Esse campo é obrigatório",
              }}
              render={({ field }) => {
                return (
                  <ChakraTagInput
                    rounded='md'
                    placeholder='digite os tópicos'
                    tags={field.value}
                    onTagsChange={(e, tags) => field.onChange(tags)}
                    size="md" />
                )
              }}
            />
            {errors?.tagsOrConcepts?.message && (
              <FormErrorMessage>{errors.tagsOrConcepts.message}</FormErrorMessage>
            )}
            <FormHelperText>lista de conceitos trabalhados, deve vir dos conceitos listados no planejamento do módulo. Digite o texto e pressione enter</FormHelperText>
          </FormControl>
          <FormControl
            isInvalid={!!errors.text}
          >
            <FormLabel>Enunciado</FormLabel>
            <Textarea
              {...register("text", {
                required: "Esse campo é obrigatório",
              })}
              placeholder=""
            />
            {errors?.text?.message && (
              <FormErrorMessage>{errors.text.message}</FormErrorMessage>
            )}
            <FormHelperText>Enunciado da questão</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Alternativas{' '}
              <Tooltip hasArrow label='O feedback é o que o aluno verá se escolher a respectiva alternativa. Deve conter um feedback claro do porquê essa alternativa é a certa ou a errada' bg='gray.300' color='black'>
                <InfoOutlineIcon />
              </Tooltip>
            </FormLabel>
            <VStack spacing={2} align='flex-start'>
              <AlternativeList fields={fields} register={register} remove={remove} append={append} />
            </VStack>
          </FormControl>
          <Flex gap={2}>
            <NumberInput w='80px' defaultValue={0} min={0} allowMouseWheel
              onChange={(valueString) => setExercisenumber(parseInt(valueString))}
              value={exercisenumber}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button
              colorScheme="green"
              isLoading={isSubmitting}
              type="submit"
            >
              Gerar exercício
            </Button>
          </Flex>
        </VStack>
      </form>
    </>
  )
}