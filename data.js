const data = {
    kpis: {
        worklist: 6,
        newLeads: 27,
        updates: 22,
        assigned: 3
    },
    worklist: [
        {
            name: "Avery Nolan",
            title: "Product Manager • Nordbyte",
            priority: "High",
            status: "Awaiting our proposal",
            avatarUrl: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/94f325d2-00ce-48ec-9c3d-a87ff77bb836_320w.jpg",
            active: true
        },
        {
            name: "Maya Chen",
            title: "Marketing Lead • Lunatech",
            priority: "High",
            priorityColor: "orange",
            status: "Awaiting our proposal",
            avatarUrl: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4d72eb51-d86e-431b-ad62-97cdf574a592_320w.jpg",
            active: false
        },
        {
            name: "Leo Kramer",
            title: "CEO • Orbital",
            priority: "Mid",
            priorityColor: "cyan",
            status: "Phone call",
            avatarUrl: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d72202a6-6f82-40bf-84db-846e9adc396a_320w.jpg",
            active: false
        }
    ],
    profile: {
        name: "Avery Nolan",
        tags: ["High", "Warm"],
        details: [
            "Product Manager • Nordbyte (2,100 employees)",
            "(402) 555‑0146",
            "3538 Copper Ridge Dr, Boise, ID"
        ],
        avatarUrl: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2d84440c-f8f5-4db9-aa0b-0b4e3512a162_320w.jpg",
        manager: {
            name: "M. Ruiz",
            avatarUrl: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6e7842fa-2930-4398-a1b1-829010b57b42_320w.jpg"
        }
    },
    timeline: [
        {
            date: "12 May",
            icon: "message-square",
            title: "Information sent to the customer",
            author: "M. Ruiz",
            category: "Discovery",
            description: "Shared comparison matrix and product overview. Scheduled follow-up for Friday."
        },
        {
            date: "15 May",
            icon: "handshake",
            title: "Gathering additional requirements",
            author: "M. Ruiz",
            category: "Negotiation",
            description: "Client is considering the team plan. Waiting on internal approval for budget expansion."
        }
    ],
    messages: [
        {
            isOwnMessage: false,
            content: "Hey, how are you?",
            timestamp: "9:20 am"
        },
        {
            isOwnMessage: true,
            content: "We reviewed your notes and prepared a draft proposal. Sending it shortly.",
            timestamp: "9:30 am"
        },
        {
            isOwnMessage: false,
            content: "Great—please include payment schedule and rollout timing.",
            timestamp: "9:31 am"
        }
    ],
    interest: {
        title: "Interested in AeroPress Kit",
        subtitle: "Brew bundle + filters",
        profit: "$ 23,500",
        checklist: [
            { text: "Client's portrait", checked: true },
            { text: "Similar successful cases", checked: true },
            { text: "Low budget risk", checked: false }
        ]
    },
    task: {
        title: "Send proposal",
        dueDate: "Today",
        comparison: {
            us: [
                { text: "Trusted brand, solid support", icon: "star" },
                { text: "Fast onboarding", icon: "zap" }
            ],
            competitor: [
                { text: "Lower price, longer delivery", icon: "info" }
            ]
        }
    }
};
