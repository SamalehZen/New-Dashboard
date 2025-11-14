document.addEventListener('DOMContentLoaded', function() {
    // KPIs
    document.getElementById('kpi-worklist').textContent = data.kpis.worklist;
    document.getElementById('kpi-newLeads').textContent = data.kpis.newLeads;
    document.getElementById('kpi-updates').textContent = data.kpis.updates;
    document.getElementById('kpi-assigned').textContent = data.kpis.assigned;

    // Worklist
    const worklistContainer = document.getElementById('worklist-container');
    worklistContainer.innerHTML = '';
    data.worklist.forEach(item => {
        const bgColor = item.active ? 'bg-green-400 text-zinc-900' : 'bg-zinc-900/70';
        const priorityColorClass = item.priorityColor === 'orange' ? 'bg-orange-400 text-white' : item.priorityColor === 'cyan' ? 'bg-cyan-400 text-zinc-900' : 'bg-white/80';
        const worklistItem = `
            <div class="rounded-2xl p-3 ${bgColor}">
                <div class="flex items-center gap-3">
                    <img src="${item.avatarUrl}" alt="avatar" class="h-9 w-9 rounded-full object-cover">
                    <div class="flex-1">
                        <div class="text-sm font-medium tracking-tight font-geist">${item.name}</div>
                        <div class="text-xs ${item.active ? 'text-zinc-700' : 'text-zinc-400'} font-geist">${item.title}</div>
                    </div>
                    <span class="px-2 py-0.5 rounded-full text-xs ${priorityColorClass} font-geist">${item.priority}</span>
                </div>
                <div class="mt-2 text-xs ${item.active ? 'text-zinc-700' : 'text-zinc-400'} font-geist">${item.status}</div>
            </div>`;
        worklistContainer.innerHTML += worklistItem;
    });

    // Profile
    document.getElementById('profile-name').textContent = data.profile.name;
    document.getElementById('profile-avatar').src = data.profile.avatarUrl;
    document.getElementById('profile-manager-name').textContent = data.profile.manager.name;
    document.getElementById('profile-manager-avatar').src = data.profile.manager.avatarUrl;
    const profileDetailsContainer = document.getElementById('profile-details');
    profileDetailsContainer.innerHTML = '';
    data.profile.details.forEach(detail => {
        profileDetailsContainer.innerHTML += `<div class="font-geist">${detail}</div>`;
    });
    const profileTagsContainer = document.getElementById('profile-tags');
    profileTagsContainer.innerHTML = '';
    data.profile.tags.forEach(tag => {
        const tagClass = tag === 'High' ? 'bg-orange-400 text-white' : 'bg-cyan-300 text-zinc-900';
        profileTagsContainer.innerHTML += `<span class="px-2.5 py-1 rounded-full text-xs ${tagClass} font-geist">${tag}</span>`;
    });

    // Timeline
    const timelineContainer = document.getElementById('timeline-container');
    timelineContainer.innerHTML = '';
    data.timeline.forEach(item => {
        const timelineItem = `
            <div class="rounded-3xl bg-zinc-50 p-4 md:p-5 border border-zinc-200/50 flex gap-4">
                <div class="w-14 shrink-0 flex flex-col items-center">
                    <span class="text-xs text-zinc-500 font-geist">${item.date}</span>
                    <span class="mt-1 h-7 w-7 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="${item.icon}" class="lucide lucide-${item.icon} h-4 w-4"></svg>
                    </span>
                </div>
                <div class="flex-1">
                    <div class="flex flex-wrap items-center gap-2">
                        <h3 class="text-base md:text-lg tracking-tight font-semibold font-geist">${item.title}</h3>
                        <span class="px-2 py-0.5 rounded-full text-xs bg-zinc-100 font-geist">${item.author}</span>
                        <span class="px-2 py-0.5 rounded-full text-xs bg-cyan-100 text-cyan-700 font-geist">${item.category}</span>
                    </div>
                    <p class="mt-1 text-sm text-zinc-600 font-geist">${item.description}</p>
                </div>
                <button class="self-start p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="arrow-up-right" class="lucide lucide-arrow-up-right h-4 w-4"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                </button>
            </div>`;
        timelineContainer.innerHTML += timelineItem;
    });

    // Messages
    const messagesContainer = document.getElementById('messages-container');
    messagesContainer.innerHTML = '';
    data.messages.forEach(message => {
        const messageClass = message.isOwnMessage ? 'ml-auto bg-zinc-900 text-zinc-100' : 'bg-zinc-100';
        const timestampClass = message.isOwnMessage ? 'text-zinc-400' : 'text-zinc-500';
        const messageItem = `
            <div class="max-w-[80%] rounded-2xl p-3 text-sm font-geist ${messageClass}">
                ${message.content}
                <div class="mt-1 text-[11px] ${timestampClass} font-geist">${message.timestamp}</div>
            </div>`;
        messagesContainer.innerHTML += messageItem;
    });

    // Interest Card
    document.getElementById('interest-title').textContent = data.interest.title;
    document.getElementById('interest-subtitle').textContent = data.interest.subtitle;
    document.getElementById('interest-profit').textContent = data.interest.profit;
    const interestChecklistContainer = document.getElementById('interest-checklist');
    interestChecklistContainer.innerHTML = '';
    data.interest.checklist.forEach(item => {
        const icon = item.checked ? 'check' : 'minus';
        const checklistItem = `
            <li class="flex items-center gap-2">
                <span class="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="${icon}" class="lucide lucide-${icon} h-3.5 w-3.5"><path d="${icon === 'check' ? 'M20 6 9 17l-5-5' : 'M5 12h14'}"></path></svg>
                </span>
                <span class="text-sm font-geist">${item.text}</span>
            </li>`;
        interestChecklistContainer.innerHTML += checklistItem;
    });

    // Task Card
    document.getElementById('task-title').textContent = data.task.title;
    document.getElementById('task-due-date').textContent = data.task.dueDate;
    const taskUsContainer = document.getElementById('task-us');
    taskUsContainer.innerHTML = '';
    data.task.comparison.us.forEach(item => {
        const usItem = `<li class="flex items-center gap-1.5 font-geist"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="${item.icon}" class="lucide lucide-${item.icon} h-3.5 w-3.5"></svg> ${item.text}</li>`;
        taskUsContainer.innerHTML += usItem;
    });
    const taskCompetitorContainer = document.getElementById('task-competitor');
    taskCompetitorContainer.innerHTML = '';
    data.task.comparison.competitor.forEach(item => {
        const competitorItem = `<li class="flex items-center gap-1.5 font-geist"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="${item.icon}" class="lucide lucide-${item.icon} h-3.5 w-3.5"></svg> ${item.text}</li>`;
        taskCompetitorContainer.innerHTML += competitorItem;
    });

    // Re-initialize any dynamic elements if necessary (like lucide icons)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
