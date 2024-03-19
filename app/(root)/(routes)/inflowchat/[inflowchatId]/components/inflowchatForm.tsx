"use client"
import * as z from "zod"
import { Category, Companion } from "@prisma/client"
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { ImageUpload } from "@/components/image-uplad";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

interface InflowchatFormProps {
    initialData: Companion | null;
    categories: Category[];
}

const formSchema = z.object({
    name: z.string().min(1,{
        message: "Name is required.",
    }),
    description: z.string().min(1,{
        message: "desceiption is requered.",
    }),
    instructions: z.string().min(200,{
        message: "Instruction required at least 200 characters.",
    }),
    seed: z.string().min(200,{
        message: "Seed required at least 200 characters.",
    }),
    src: z.string().min(1,{
        message: "Image is requered.",
    }),
    categoryId: z.string().min(1,{
        message: "Category is requered.",
    }),
})

export const InflowchatForm = ({
    categories,
    initialData
}: InflowchatFormProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            name: "",
            description: "",
            instructions: "",
            seed: "",
            src: "",
            categoryId: undefined,


        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        console.log(values);

    }
    return(
        <div className="h-full p-4 space-y-2 maxw-3xl mx-auto ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pb-10">
                    <div className="space-y-2 w-full col-span-2">
                        <div>
                            <h3 className="text-lg font-medium">
                                General Information 
                            </h3>
                            <p className="text-sn text-nuted-foreground">
                                General information about your character.
                            </p>
                        </div>
                        <Separator className="bg-primary/10"/>
                    </div>

                    <FormField
                      name="src"
                      render={({ field }) =>(
                        <FormItem className="flex flex-col item-center justify-center space-y-4 col-span-2">
                            <FormControl>
                                <ImageUpload 
                                disabled={isLoading}
                                onChange={field.onChange}
                                value={field.value}
                                >

                                </ImageUpload>
                            </FormControl>
                            <FormMessage>

                            </FormMessage>

                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField 
                        name ="name"
                        control={form.control}
                        render={({field}) => (
                            <FormItem className="col-span-2 md:col-span-1">
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                    disabled={isLoading}
                                    placeholder="Elon Musk"
                                    {...field}
                                    >

                                    </Input>
                                </FormControl>
                                <FormDescription>
                                    This is how your AI Chracter will be named.
                                </FormDescription>
                                <FormMessage/>

                            </FormItem>
                        )}
                        

                        />

                       <FormField 
                        name ="description"
                        control={form.control}
                        render={({field}) => (
                            <FormItem className="col-span-2 md:col-span-1">
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input
                                    disabled={isLoading}
                                    placeholder="CEO & Founder of Tesla, Space X"
                                    {...field}
                                    >

                                    </Input>
                                </FormControl>

                                <FormDescription>
                                    Short description for your AI Character.
                                </FormDescription>
                                <FormMessage/>

                            </FormItem>
                        )}
                        

                        />

                       <FormField 
                        name ="categoryId"
                        control={form.control}
                        render={({field}) => (
                            <FormItem >

                                <FormLabel>Category</FormLabel>
                                <Select>
                                    
                                </Select>
                                

                            </FormItem>
                        )}
                        

                        />


                    </div>
                </form>

            </Form>
        </div>
    )
}