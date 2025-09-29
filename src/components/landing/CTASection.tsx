"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { showError, showSuccess } from "@/utils/toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  phone: z.string().min(6, { message: "Por favor, introduce un número de teléfono válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

const CTASection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // 1. Guardar en la base de datos
    const { error: dbError } = await supabase.from('contacts').insert([
      { name: values.name, email: values.email, phone: values.phone, message: values.message },
    ]);

    if (dbError) {
      console.error('Error al insertar en la base de datos:', dbError);
      showError("Hubo un error al enviar tu mensaje. Inténtalo de nuevo.");
      return; // Detener si falla la inserción en la BD
    }

    // 2. Invocar la Edge Function para notificar a n8n (si la BD tuvo éxito)
    try {
      const { error: functionError } = await supabase.functions.invoke('contact-form-forwarder', {
        body: values,
      });

      if (functionError) {
        // No mostramos error al usuario, pero lo registramos.
        // La prioridad es que el contacto quede guardado.
        console.error('Error al invocar la Edge Function:', functionError);
      }
    } catch (e) {
      console.error('Error inesperado al invocar la Edge Function:', e);
    }

    showSuccess("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hablemos de tu Proyecto</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Completa el formulario para agendar tu auditoría de IA gratuita. Descubre cómo podemos transformar tu negocio.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} className="bg-muted focus:border-neon-purple focus:ring-neon-purple" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="tu@email.com" {...field} className="bg-muted focus:border-neon-purple focus:ring-neon-purple" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Tu número de teléfono" {...field} className="bg-muted focus:border-neon-purple focus:ring-neon-purple" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Cuéntanos sobre tu proyecto..." {...field} className="bg-muted focus:border-neon-purple focus:ring-neon-purple" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-neon-purple hover:brightness-110 text-white hover:text-black font-bold transition-all duration-300 hover:shadow-glow-purple text-lg py-6">
                Solicitar Auditoría Gratuita
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;