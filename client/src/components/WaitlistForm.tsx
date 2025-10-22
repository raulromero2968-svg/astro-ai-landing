import { useState } from "react";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const joinMutation = trpc.waitlist.join.useMutation({
    onSuccess: () => {
      setIsSubmitted(true);
      toast.success("Welcome to the waitlist!", {
        description: "You'll receive updates as we build Astro AI.",
      });
      setName("");
      setEmail("");
      setMessage("");
    },
    onError: (error) => {
      toast.error("Something went wrong", {
        description: error.message || "Please try again later.",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please fill in all required fields");
      return;
    }
    joinMutation.mutate({ name, email, message });
  };

  if (isSubmitted) {
    return (
      <div className="text-center space-y-4 py-8">
        <div className="text-6xl">🎉</div>
        <h3 className="text-2xl font-bold">You're on the list!</h3>
        <p className="text-muted-foreground">
          Thanks for believing in the mission. You'll hear from me soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Why are you interested? (optional)</label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Tell me what resonates with you about this vision..."
        ></textarea>
      </div>
      <Button type="submit" className="w-full" size="lg" disabled={joinMutation.isPending}>
        {joinMutation.isPending ? "Joining..." : "Join the Waitlist"}
      </Button>
      <div className="text-center text-sm text-muted-foreground space-y-2">
        <p>No commitment. No payment. Just updates.</p>
        <p>You can unsubscribe anytime.</p>
      </div>
    </form>
  );
}

